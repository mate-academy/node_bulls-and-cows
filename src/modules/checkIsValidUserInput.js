function checkIsValidUserInput(userInput) {
  if (
    userInput.length !== 4 ||
    userInput[0] === '0' ||
    !/^\d{4}$/.test(userInput) ||
    new Set(userInput).size !== 4
  ) {
    return false;
  }

  return true;
}

module.exports = { checkIsValidUserInput };
