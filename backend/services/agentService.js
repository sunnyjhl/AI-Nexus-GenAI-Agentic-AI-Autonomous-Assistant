const openaiService = require('./openaiService');
const calculatorTool = require('../tools/calculatorTool');
const weatherTool = require('../tools/weatherTool');
const searchTool = require('../tools/searchTool');
const Conversation = require('../models/Conversation');

// Agentic AI Core
class AgentService {
  tools = {
    calculator: calculatorTool,
    weather: weatherTool,
    search: searchTool
  };

  async processQuery(sessionId, userMessage) {
    // 1. Get conversation history
    const conv = await Conversation.findOne({ sessionId }) || new Conversation({ sessionId, messages: [] });
    
    // 2. Append user message
    conv.messages.push({ role: 'user', content: userMessage });
    
    // 3. Agentic workflow
    const tasksJson = await openaiService.breakIntoTasks(userMessage);
    let tasks;
    try {
      tasks = JSON.parse(tasksJson);
    } catch {
      tasks = [userMessage]; // Fallback
    }
    
    // 4. Execute tools autonomously
    const results = [];
    for (const task of tasks) {
      const tool = this.selectTool(task);
      if (tool) {
        const result = await tool.execute(task);
        results.push({ task, result });
      }
    }
    
    // 5. Synthesize final response
    const finalResponse = await openaiService.synthesizeResponse(results);
    
    // 6. Save to memory
    conv.messages.push({ role: 'assistant', content: finalResponse });
    await conv.save();
    
    return { response: finalResponse, tasks: results };
  }

  selectTool(task) {
    // Simple keyword-based routing (production: use LLM)
    if (task.toLowerCase().includes('weather') || task.includes('temperature')) return this.tools.weather;
    if (task.match(/\\d+\\s*\\+\\-|\\*|\/|\\bcalc\\b|\\btip\\b|\\bmath\\b/)) return this.tools.calculator;
    if (task.includes('search') || task.includes('find')) return this.tools.search;
    return null;
  }
}

module.exports = new AgentService();

