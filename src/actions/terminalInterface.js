/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { generateRandomNumber } = require('./generateNumber');
const { countBullsAndCows } = require('./countBullsAndCows');
const { NUMBER_SIZE } = require('./variables');

let generatedNumber = generateRandomNumber();

function runNewRound() {
  terminal.question('Can you guess the number?', (answer) => {
    const isAnswerInvalid = answer.length !== NUMBER_SIZE
    || new Set(answer).size !== NUMBER_SIZE || !(+answer);

    if (isAnswerInvalid) {
      console.log(`Your guess must consist of ${NUMBER_SIZE} different digits`);
      runNewRound();
    } else {
      const { bulls, cows } = countBullsAndCows(generatedNumber, answer);

      if (bulls === 4) {
        console.log('Congratulations! You win');
        restart();
      } else {
        console.log(`The result is ${bulls} bulls and ${cows} cows`);
        runNewRound();
      }
    }
  });
}

function restart() {
  terminal.question(
    'Want to start again? Press Y for "yes", anything else for "no".',
    (answer) => {
      if (answer === 'Y') {
        console.log(`I have generated a ${NUMBER_SIZE}-digit number.`);
        generatedNumber = generateRandomNumber();
        runNewRound();
      } else {
        return terminal.close();
      }
    });
}

module.exports = { runNewRound };
