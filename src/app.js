'use strict';

const readline = require('readline');
const { getRandomNumber } = require('./getRandomNumber');
const { counterResults } = require('./counterResults');

const gameInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = getRandomNumber();

function cowsAndBuls() {
  gameInterface.question('Write four digit number', (num) => {
    const result = counterResults(num, randomNumber);

    console.log(result) // eslint-disable-line

    if (result.includes('BULLS - 4')) {
      console.log('CONGRATULATION - YOU ARE THE WINNER') // eslint-disable-line
      gameInterface.close();

      return;
    } else {
      cowsAndBuls();
    };
  });
}

cowsAndBuls();
