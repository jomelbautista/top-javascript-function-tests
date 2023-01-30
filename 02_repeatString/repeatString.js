const repeatString = function(string, num) {
  // Corrected return statement
  // Passed tests
  let manipulatedString = ''
  if (num < 0) {
    return 'ERROR'
  }
  for (let i = 0; i < num; i++) {
    manipulatedString += string
  }
  return manipulatedString
};

// Do not edit below this line
module.exports = repeatString;
