'use strict';

const readline = require('readline');
const { get4Digits } = require('./randomizer');
const { getBullsAndCows } = require('./bullsAndCows');
const { getValidDigits } = require('./validator');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const winningDigits = get4Digits();

const handleInput = (input) => {
  try {
    const digits = getValidDigits(input);
    const [bulls, cows] = getBullsAndCows(digits, winningDigits);

    if (bulls === 4) {
      terminal.write('Well done I guess\n');
      terminal.close();
    } else {
      terminal.write(`bulls: ${bulls}, cows: ${cows}\n`);
      terminal.question('try again:\n', handleInput);
    }
  } catch (error) {
    terminal.write(`Something is wrong with your input: ${error.message}\n`);
    terminal.question('try again:\n', handleInput);
  }
};

const start = () => {
  terminal.write(
    'Starting the game, the livestock is ready to be counted...\n'
  );
  terminal.question('Take your guess:\n', handleInput);
};

module.exports = { start };
