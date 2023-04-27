'use strict';

const compareInputNumber = (inputNumber, x) => {
  let bulls = 0;
  let cows = 0;
  const inputString = inputNumber.toString();
  const randomString = x.toString();

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === randomString[i]) {
      bulls++;
    }

    if (
      inputString[i] !== randomString[i]
          && randomString.includes(inputString[i])
    ) {
      cows++;
    }
  }

  global.console.log(`You have ${bulls} Bulls, and ${cows} Cows`);
};

module.exports = { compareInputNumber };
