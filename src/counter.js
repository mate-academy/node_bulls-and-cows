'use strict';

const countBullsAndCows = (random, usersInput) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < random.length; i++) {
    if (random[i] === usersInput[i]) {
      bulls++;
    }

    if (random[i] !== usersInput[i] && random.includes(usersInput[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
};

module.exports = { countBullsAndCows };
