/* eslint-disable no-console */
'use strict';

const { numsToGuess } = require('./generateNumber');

function checkNumbers(state) {
  let { userInput } = state;

  userInput = [...new Set(userInput)].join('');

  let resultState = {};

  if (userInput === numsToGuess) {
    resultState = {
      ...state,
      game: false,
      message: 'Congratulations, you guessed all the numbers',
    };

    return resultState;
  }

  let bull = 0;
  let cow = 0;
  let bullOrBulls = 'bulls';
  let cowOrCows = 'cows';

  for (let i = 0; i < 4; i++) {
    if (numsToGuess.includes(userInput[i])) {
      cow++;

      if (numsToGuess[i] === userInput[i]) {
        bull++;
      }
    }
  }

  if (bull === 1) {
    bullOrBulls = 'bull';
  }

  if (cow === 1) {
    cowOrCows = 'cow';
  }

  resultState = {
    ...state,
    message: `You have ${bull} ${bullOrBulls} and ${cow} ${cowOrCows} `,
  };

  return resultState;
};

module.exports = { checkNumbers };
