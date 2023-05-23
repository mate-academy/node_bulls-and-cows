'use strict';

function calculatingBullsAndCows(randomNumber, userNumber) {
  const userNumberArray = userNumber.toString().split('').map(num => +num);
  const randomNumberArray = randomNumber.toString().split('').map(num => +num);

  let count = 0;
  const bulls = [];
  const cows = [];

  for (let i = 0; i < userNumberArray.length; i++) {
    if (userNumberArray[i] === randomNumberArray[i]) {
      count++;
      bulls.push(userNumberArray[i]);
      continue;
    }

    const index = randomNumberArray
      .findIndex(num => userNumberArray[i] === num);

    if (index >= 0 && index !== i) {
      cows.push(userNumberArray[i]);
    }
  }

  return {
    status: count === 4,
    statusString: ''.concat(
      bulls.length
        ? `bull (guessed digits ${bulls.join(' and ')} are on their places) `
        : '',
      cows.length
        ? `cows (digits ${cows.join(' and ')} are present but on wrong places)`
        : '',
      !bulls.length && !cows.length ? 'Not a single number guessed' : ''
    ),
  };
}

module.exports = {
  calculatingBullsAndCows,
};
