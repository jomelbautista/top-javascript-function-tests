const removeFromArray = function (userArray) {
  // Corrected return statement
  // Passed tests
  for (let i = 1; i < arguments.length; i++) {
    const removeTermIndex = userArray.indexOf(arguments[i])
    if (
      removeTermIndex >= 0 &&
      typeof userArray[removeTermIndex] === typeof arguments[i]
    ) {
      userArray.splice(removeTermIndex, 1)
    }
  }
  return userArray
}

// Do not edit below this line
module.exports = removeFromArray
