'use strict';

const calculatingModule = (randomNumber, guess) => {
  const arrRandomNumber = randomNumber.toString().split('');
  const arrGuessNumber = guess.toString().split('');
  let needNextTry = false;
  const result = [];

  for (let i = 0; i < 4; i++) {
    if (arrGuessNumber[i] === arrRandomNumber[i]) {
      result.push(`${arrGuessNumber[i]} - bull,`);
      continue;
    }

    if (arrRandomNumber.includes(arrGuessNumber[i])) {
      result.push(`${arrGuessNumber[i]} - cow,`);
      needNextTry = true;
      continue;
    }
    needNextTry = true;
    result.push(`${arrGuessNumber[i]} - wrong,`);
  }

  return needNextTry ? result.join(' ') : false;
};

module.exports = (calculatingModule);
