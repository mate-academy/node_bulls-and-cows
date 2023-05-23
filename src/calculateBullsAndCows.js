'use strict';

function convertNumberToArray(number) {
  return number.toString().split('').map(num => +num);
}

function setStatusString(bulls, cows) {
  if (!bulls.length && !cows.length) {
    return 'Not a single number guessed';
  }

  return ''.concat(
    bulls.length
      ? `bull (guessed digits ${bulls.join(' and ')} are on their places) `
      : '',
    cows.length
      ? `cows (digits ${cows.join(' and ')} are present but on wrong places)`
      : '',
  );
}

function calculateBullsAndCows(randomNumber, userNumber) {
  const userNumberArray = convertNumberToArray(userNumber);
  const randomNumberArray = convertNumberToArray(randomNumber);

  const bulls = [];
  const cows = [];

  for (let i = 0; i < userNumberArray.length; i++) {
    if (userNumberArray[i] === randomNumberArray[i]) {
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
    status: bulls.length === 4,
    statusString: setStatusString(bulls, cows),
  };
}

module.exports = {
  calculateBullsAndCows,
};
