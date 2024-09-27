'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const INITIAL_MESSAGE = `
Please, guess the 4 digit number:
`;
const INVALID_INPUT_MESSAGE = `
The answer must must be a number between 1000 and 9999, without repeating digits.
Please, try again...
`;

const WRONG_GUESS = `
Ooops, your guess was completely off...
C'mon, give it one more try!
`;

const PARTIAL_GUESS = `
Sorry, but your guess is incorrect
However, you've scored {:bulls} bulls and {:cows} cows.
C'mon, give it one more try!
`;

const COMPLETE_GUESS = `
Congrats, you've guessed the number!
`;

const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

function handleUserInput(input) {
  const trimmedInput = input.trim();

  const isValid = checkIsValidUserInput(trimmedInput);

  if (!isValid) {
    cli.question(INVALID_INPUT_MESSAGE, handleUserInput);

    return;
  }

  const { bulls, cows } = getBullsAndCows(Number(trimmedInput), numberToGuess);

  if (bulls === 4) {
    cli.write(COMPLETE_GUESS);
    cli.close();

    return;
  }

  if (bulls === 0 && cows === 0) {
    cli.question(WRONG_GUESS, handleUserInput);

    return;
  }

  cli.question(
    PARTIAL_GUESS.replace('{:bulls}', bulls).replace('{:cows}', cows),
    handleUserInput,
  );
}

cli.question(INITIAL_MESSAGE, handleUserInput);
