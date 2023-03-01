'use strict';

const readline = require('readline');
const { getRandomNumber } = require('./getRandomNumber');
const { countBulls } = require('./countBulls');
const { countCows } = require('./countCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const computerNumber = getRandomNumber();

function handlePlayerNumber(input) {
  const [bulls, cows] = [
    countBulls(input, computerNumber),
    countCows(input, computerNumber),
  ];

  if (bulls === 4) {
    terminal.write('Congratulations! You win!');
    terminal.close();
  } else {
    terminal.write(`Your score: Bulls  - ${bulls}, Cows - ${cows} \n`);

    terminal.question(
      'Please, enter your number one again: ',
      handlePlayerNumber,
    );
  }
}

function bullsAndCows() {
  terminal.write('Let\'s start our game! \n');

  terminal.question(
    'Please, enter your number and try your intuition: ',
    handlePlayerNumber,
  );
}

module.exports = {
  bullsAndCows,
};
