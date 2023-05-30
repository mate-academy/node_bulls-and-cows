'use strict';

const readline = require('readline');
const { getRandomNumber } = require('./getRandomNumber');
const { counterResults } = require('./counterResults');

const gameInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cowsAndBuls() {
  gameInterface.question('Write four digit number', (num) => {
    const result = counterResults(num, getRandomNumber());

    if (result.includes('BULLS - 4')) {
      console.log('CONGRATULATION - YOU ARE THE WINNER') // eslint-disable-line
    }

    console.log(result) // eslint-disable-line
    gameInterface.close();
  });
}

cowsAndBuls();
