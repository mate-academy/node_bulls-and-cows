'use strict';

const { getRandomNumber } = require('./getRandomNumber.js');
const readline = require('readline');
const { countCowsAndBulls } = require('./countCowAndBulls.js');
const { numberCheck } = require('./numberCheck.js');

const inteface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = () => {
  inteface.question('Write your number...', (questNumber) => {
    const randomNumber = getRandomNumber();

    if (numberCheck(questNumber) === true) {
      // eslint-disable-next-line no-console
      console.log('Enter correct value');
      game();
    } else {
      const result = countCowsAndBulls(randomNumber, questNumber);

      // eslint-disable-next-line no-console
      console.log(
        `Your result:
        Bulls:${result.bulls},
        Cows:${result.cows}
        Try again:`);

      if (result.bulls === 4) {
        inteface.close();
      } else {
        game();
      }
    }
  });
};

game();
