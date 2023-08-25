/* eslint-disable no-console */
'use strict';

const getBullsAndCows = require('./getBullsAndCows');
const validateInput = require('./validateInput');
const inputAndOutputOperations = require('./inputAndOutputOperations');

const handlePlayRound = (programNumber) => {
  inputAndOutputOperations.question('', (userNumber) => {
    const isInputValid = validateInput(userNumber);
    const result = getBullsAndCows(programNumber, userNumber);

    if (!isInputValid) {
      console.log('Please enter a valid 4-digit number with unique digits.');
      handlePlayRound(programNumber);

      return;
    }

    if (result.bulls === 4) {
      console.log(`Congratulations! You guessed the ${programNumber}!`);

      inputAndOutputOperations.close();
    } else {
      console.log(
        `The result is ${result.bulls} ${
          result.bulls === 1 ? 'bull' : 'bulls'
        } and ${result.cows} ${
          result.cows === 1 ? 'cow' : 'cows'
        }.\nEnter your guess: `,
      );

      handlePlayRound(programNumber);
    }
  });
};

module.exports = handlePlayRound;
