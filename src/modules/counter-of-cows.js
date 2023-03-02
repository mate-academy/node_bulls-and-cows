'use strict';

const countCows = (userGuess, number) => {
  const count = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < number.length; i++) {
    if (number.includes(userGuess[i])) {
      number[i] === userGuess[i] ? count.bulls++ : count.cows++;
    }
  }

  return count;
};

module.exports = countCows;
