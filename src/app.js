'use strict';

const { randomDigitsGenerator } = require('./modules/randomDigitsGenerator');
const { bullsCowsCalculator } = require('./modules/bullsCowsCalculator');
const { handleInputOutput } = require('./modules/handleInputOutput');

const bullsAndCowsGame = async() => {
  const randomDigits = randomDigitsGenerator();

  const userNumber = await handleInputOutput();

  if (userNumber) {
    const { bulls, cows } = bullsCowsCalculator(randomDigits, userNumber);

    const bullsMessage = createMessage(bulls, 'bulls');
    const cowsMessage = createMessage(cows, 'cows');

    const message = `${bulls} ${bullsMessage} and ${cows} ${cowsMessage}`;

    if (bulls === 4) {
      global.console.log(message);
      global.console.log('You are winner !!!');
    } else {
      if (bulls !== 0 || cows !== 0) {
        global.console.log(message);
      } else {
        global.console.log('Try one more time');
      }

      return bullsAndCowsGame();
    }
  }
};

const createMessage = (value, name) => {
  return value > 1 || value === 0 ? name : name.slice(0, name.length - 1);
};

bullsAndCowsGame();
