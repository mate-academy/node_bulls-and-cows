/* eslint-disable no-console */
'use strict';

const calculationОfResults = (generatedNumber, guessNumber) => {
  let bulls = 0;
  let cows = 0;
  let result = false;

  for (let i = 0; i < generatedNumber.length; i++) {
    if (generatedNumber[i] === guessNumber[i]) {
      bulls++;
    } else if (generatedNumber.includes(guessNumber[i])) {
      cows++;
    }
  }

  if (bulls === 4) {
    result = true;
  }

  const resultMessage = (bulls === 4)
    ? 'You won! Congratulations!'
    : `Bulls - ${bulls}, cows - ${cows}`;

  console.log(resultMessage);

  return result;
};

module.exports = { calculationОfResults };
