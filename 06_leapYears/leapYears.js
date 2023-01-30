const leapYears = function(year) {
  // Corrected return statement
  // Passed tests
  if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
    return true
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = leapYears;
