const sumAll = function (num1, num2) {
  // Corrected return statement
  // Passed tests
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return "ERROR"
  }
  let totalSum = 0
  let lowerNum, upperNum
  if (num1 > num2) {
    lowerNum = num2
    upperNum = num1
  } else {
    lowerNum = num1
    upperNum = num2
  }
  for (i = lowerNum; i <= upperNum; i++) {
    totalSum += i
  }
  return totalSum
}

// Do not edit below this line
module.exports = sumAll
