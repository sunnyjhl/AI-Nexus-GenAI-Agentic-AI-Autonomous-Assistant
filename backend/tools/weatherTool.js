// Mock Weather Tool (production: OpenWeatherMap API)
class WeatherTool {
  async execute(query) {
    const city = query.match(/([A-Za-z\\s]+)/)?.[1] || 'Unknown';
    // Mock data
    const weatherData = {
      NYC: 'Sunny, 22°C',
      'Los Angeles': 'Cloudy, 28°C',
      'London': 'Rainy, 15°C',
      'Default': 'Clear skies, 20°C'
    };
    return `Weather in ${city}: ${weatherData[city] || weatherData.Default}`;
  }
}

module.exports = new WeatherTool();

