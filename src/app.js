'use strict';

const { randomDigitsGenerator } = require('./modules/randomDigitsGenerator');
const { bullsCowsCalculator } = require('./modules/bullsCowsCalculator');
const { handleInputOutput } = require('./modules/handleInputOutput');

const bullsAndCowsGame = async() => {
  const randomDigits = randomDigitsGenerator();

  const userNumber = await handleInputOutput();

  if (userNumber) {
    const result = bullsCowsCalculator(randomDigits, userNumber);

    if (result === 1) {
      global.console.log(result);
      global.console.log('You are winner !!!');
    } else {
      if (result !== -1) {
        global.console.log(result);
      } else {
        global.console.log('Try one more time');
      }

      return bullsAndCowsGame();
    }
  }
};

bullsAndCowsGame();
