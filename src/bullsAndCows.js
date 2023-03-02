'use strict';

const readline = require('readline');
const { getRandomNumber } = require('./getRandomNumber');
const { countBulls } = require('./countBulls');
const { countCows } = require('./countCows');
const {
  has4Digits,
  hasOnlyNumbers,
  hasUniqueNumber,
} = require('./helperToValidate');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const computerNumber = getRandomNumber();

function handlePlayerNumber(input) {
  if (!has4Digits(input)) {
    terminal.write(
      'WARNING!\nYou should enter number which consists from 4 digits\n'
    );

    terminal.question(
      'Please, enter number from 4 digits: ',
      handlePlayerNumber,
    );

    return;
  }

  if (!hasOnlyNumbers(input)) {
    terminal.write(
      'WARNING!\nYou should enter number which consists only from numbers\n'
    );

    terminal.question(
      'Please, enter number just from numbers: ',
      handlePlayerNumber,
    );

    return;
  }

  if (!hasUniqueNumber(input)) {
    terminal.write(
      'WARNING!\nYou should enter number which consists from unique digits\n'
    );

    terminal.question(
      'Please, enter number from different numbers ',
      handlePlayerNumber,
    );

    return;
  }

  const [bulls, cows] = [
    countBulls(input, computerNumber),
    countCows(input, computerNumber),
  ];

  if (bulls === 4) {
    terminal.write('Congratulations! You win!');
    terminal.close();

    return;
  }

  terminal.write(`Your score: Bulls  - ${bulls}, Cows - ${cows}\n`);

  terminal.question(
    'Please, enter your number one again: ',
    handlePlayerNumber,
  );
}

function bullsAndCows() {
  terminal.write('Let\'s start our game! \n');

  terminal.question(
    'Please, enter your number: ',
    handlePlayerNumber,
  );
}

module.exports = {
  bullsAndCows,
};
