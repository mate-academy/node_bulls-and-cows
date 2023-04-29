'use strict';

function calculateBullsAndCows(randomNum, inputNum) {
  if (inputNum.length !== 4) {
    return 'Input number must have 4 characters';
  }

  const inputNumStr = inputNum.toString();
  const randomNumStr = randomNum.toString();

  const bullsAndCows = randomNumStr.split('').map((number, index) => {
    if (inputNumStr[index] === number) {
      return 'bull';
    }

    if (inputNumStr.includes(number)) {
      return 'cow';
    }

    return '';
  });

  const filteredBullsAndCows = bullsAndCows.filter(Boolean);

  if (filteredBullsAndCows.length === 0) {
    return 'No bulls or cows';
  }

  return filteredBullsAndCows.join(' ');
}

module.exports = { calculateBullsAndCows };
