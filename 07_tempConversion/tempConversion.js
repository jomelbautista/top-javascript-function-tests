const convertToCelsius = function(tempFahrenheit) {
  // Corrected return statement
  // Passed tests
  return parseFloat(((tempFahrenheit - 32) * (5 / 9)).toFixed(1))
};

const convertToFahrenheit = function(tempCelsius) {
  // Corrected return statement
  // Passed tests
  return parseFloat(((tempCelsius * (9 / 5) + 32)).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
