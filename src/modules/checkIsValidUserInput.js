'use strict';

function checkIsValidUserInput(userInput) {
  if (userInput < 1000 || userInput > 9999) {
    return false;
  }

  const arrayNum = Array.from(String(userInput), Number);

  for (let i = 0; i < arrayNum.length; i++) {
    const tempArray = arrayNum.slice(i + 1);

    if (tempArray.includes(arrayNum[i])) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
