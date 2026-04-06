class CalculatorTool {
  async execute(query) {
    // Simple safe math eval (production: use math.js)
    try {
      const expression = query.replace(/[^0-9\\+\\-\\*\\/\\.%\\s()]/g, '');
      const result = eval(expression); // ⚠️ Limited safe eval
      return `Calculation result: ${result}`;
    } catch {
      return 'Invalid calculation';
    }
  }
}

module.exports = new CalculatorTool();

