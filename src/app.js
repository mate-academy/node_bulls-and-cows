'use strict';

const { generateSecretNumber } = require('./generateSecretNum');
const { checkNumber } = require('./checkNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateSecretNumber();

const handle = (number) => {
  if (!checkNumber(number)) {
    // eslint-disable-next-line no-console
    console.error('wrong input! Enter 4 DIFFERENT digits :)');
    terminal.question('Guess a number: ', handle);

    return;
  }

  if (number === secretNumber) {
    // eslint-disable-next-line no-console
    console.log('CONGRATS!!! YOU WON!!!');
    terminal.close();

    return;
  }

  const [bulls, cows] = calculateBullsAndCows(number, secretNumber);

  if (bulls === 2) {
    // eslint-disable-next-line no-console
    console.log(`Good result: ${bulls} bulls and ${cows} cows`);
    // eslint-disable-next-line no-console
    console.log('Try again:)');
    terminal.question('Guess a number: ', handle);

    return;
  }

  if (bulls === 3) {
    // eslint-disable-next-line no-console
    console.log(`KEEP IT UP, your result: ${bulls} bulls and ${cows} cows`);
    // eslint-disable-next-line no-console
    console.log('Try again:)');
    terminal.question('Guess a number: ', handle);

    return;
  }

  // eslint-disable-next-line no-console
  console.log(`Not bad, your result: ${bulls} bulls and ${cows} cows`);
  // eslint-disable-next-line no-console
  console.log('Try again:)');
  terminal.question('Guess a number: ', handle);
};

terminal.question('Guess a number: ', handle);
