const reverseString = function(string) {
    // Corrected return statement
  // Passed tests
  let reversedString = ''
  for (let i = 1; i <= string.length; i++) {
    reversedString += string[string.length - i]
  }
  console.log(reversedString)
  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
