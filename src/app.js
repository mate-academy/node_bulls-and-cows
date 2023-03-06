'use strict';

const { randomDigitsGenerator } = require('./modules/randomDigitsGenerator');
const { bullsCowsCalculator } = require('./modules/bullsCowsCalculator');
const { handleInputOutput } = require('./modules/handleInputOutput');

const bullsAndCowsGame = async() => {
  const randomDigits = randomDigitsGenerator();

  const userNumber = await handleInputOutput();

  if (userNumber) {
    const result = bullsCowsCalculator(randomDigits, userNumber);

    if (result !== -1) {
      // eslint-disable-next-line no-console
      console.log(result);
    } else {
      // eslint-disable-next-line no-console
      console.log('Try one more time');

      return bullsAndCowsGame();
    }
  }
};

bullsAndCowsGame();
