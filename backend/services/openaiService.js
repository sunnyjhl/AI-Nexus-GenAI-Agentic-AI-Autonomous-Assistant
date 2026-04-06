// OpenAI Service with mock fallback
const OpenAI = process.env.OPENAI_API_KEY ? require('openai') : null;
const mockResponses = {
  generate: 'This is a mock Generative AI response. In production, OpenAI would generate this.',
  summarize: 'Mock summary of your input.',
  plan: 'Mock task plan: 1. Step one, 2. Step two.'
};

class OpenAIService {
  constructor() {
    if (OpenAI) {
      this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    }
  }

  async generateText(prompt, options = {}) {
    try {
      if (!this.openai) return mockResponses.generate;
      
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        ...options
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI Error:', error);
      return mockResponses.generate;
    }
  }

  async breakIntoTasks(query) {
    const prompt = `Break this user query into specific tasks/tools needed: "${query}". Respond as JSON array: ["task1", "task2"]`;
    return this.generateText(prompt);
  }

  async synthesizeResponse(results) {
    const prompt = `Synthesize these tool results into a helpful response: ${JSON.stringify(results)}`;
    return this.generateText(prompt);
  }
}

module.exports = new OpenAIService();

