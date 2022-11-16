'use strict';

const { randomNumber } = require('./randomNumber');

const countAnimals = (userNumber) => {
  const counters = {
    bulls: 0,
    cows: 0,
  };

  const userNumberString = userNumber.toString();
  const randomNumberString = randomNumber.toString();

  for (let i = 0; i < userNumberString.length; i++) {
    if (userNumberString[i] === randomNumberString[i]) {
      counters.bulls++;
    } else if (randomNumberString.includes(userNumberString[i])) {
      counters.cows++;
    }
  }

  return { ...counters };
};

module.exports = { countAnimals };
