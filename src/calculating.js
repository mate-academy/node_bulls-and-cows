'use strict';

function calculateBullsAndCows(computer, person) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < computer.length; i++) {
    if (computer[i] === person[i]) {
      bulls++;
    } else if (computer.includes(person[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
}

function isGuessValid(person) {
  if (person.length !== 4) {
    return false;
  }

  const digitSet = new Set(person);

  return digitSet.size === 4;
}

module.exports = {
  calculateBullsAndCows,
  isGuessValid,
};
