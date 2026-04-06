// Mock Search Tool
class SearchTool {
  async execute(query) {
    // Mock results
    const results = [
      'Result 1: Relevant info about your search.',
      'Result 2: Additional details.',
      'Result 3: Summary of findings.'
    ];
    return `Search results for "${query}":\n${results.join('\\n')}`;
  }
}

module.exports = new SearchTool();

