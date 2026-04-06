const agentService = require('../services/agentService');

const agentController = {
  async chat(req, res) {
    try {
      const { sessionId = 'default', message } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: 'Message required' });
      }
      
      const result = await agentService.processQuery(sessionId, message);
      
      res.json({
        success: true,
        response: result.response,
        tasks: result.tasks,
        sessionId
      });
    } catch (error) {
      console.error('Agent Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = agentController;

