'use strict';

const getBullsAndCows = require('./modules/getBullsAndCows');
const getRandomNumber = require('./modules/getRandomNumber');
const validator = require('./modules/validateInput');
const terminal = require('./modules/terminal');

const randomNumber = getRandomNumber();

const request = () => terminal.question(
  'Enter 4 different digits: ', (userInput) => {
    const isValid = validator(userInput);

    if (!isValid) {
      return request();
    }

    const { bulls, cows } = getBullsAndCows(userInput, randomNumber);

    if (bulls === 4) {
      console.log('You won!');

      return terminal.close();
    }

    console.log(`${bulls} bulls and ${cows} cows. Try again!`);

    return request();
  }
);

request();
