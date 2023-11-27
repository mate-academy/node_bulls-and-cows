'use strict';

const _ = require('lodash');

function countGameResult(random, userInput) {
  if (_.isEqual(
    [...random],
    [...userInput]
  )) {
    return 'You won the game';
  } else {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === random[i]) {
        bulls++;
      } else if (random.includes(userInput[i])) {
        cows++;
      }
    }

    return `You have ${bulls} bulls and ${cows} cows.`;
  }
}

module.exports = { countGameResult };
