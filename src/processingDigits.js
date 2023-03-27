'use strict';

function processingDigits(randomNumber, inputNumber) {
  const stringifiedRandomNumber = String(randomNumber);
  const stringifiedInputNumber = String(inputNumber);
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < stringifiedRandomNumber.length; i++) {
    const randomDigit = stringifiedRandomNumber[i];
    const inputDigit = stringifiedInputNumber[i];

    if (stringifiedRandomNumber.includes(inputDigit)) {
      if (+randomDigit === +inputDigit) {
        bulls++;
      } else {
        cows++;
      }
    }
  }

  return [bulls, cows];
};

module.exports = { processingDigits };
