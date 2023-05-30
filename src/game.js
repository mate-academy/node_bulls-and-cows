/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
'use strict';

const { generateRandomNumber } = require('./generatorOfNumbers');
const { getHint } = require('./bullsAndCowsValidator');
const { bullsAndCowsValidator } = require('./bullsAndCowsValidator');
const { checkWroteNumber } = require('./checkWroteNumber');
const readline = require('readline');
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const secret = generateRandomNumber();

function game() {
  terminal.question('Write your number ', (writtenNumber) => {
    if (!checkWroteNumber(writtenNumber)) {
      console.log('Number should be unique. Try again');
      game();
    }

    if (secret === writtenNumber) {
      console.log(`You are winner!. Secret was - ${secret}`);
      terminal.close();
    }

    const [bulls, cows] = getHint(secret, writtenNumber);

    if (bulls === 4) {
      console.log('You are winner!');
      terminal.close();
    } else {
      console.log(`${bulls} - bulls, ${cows} - cows`);
      game();
    }
  });
}

module.exports.game = game;
