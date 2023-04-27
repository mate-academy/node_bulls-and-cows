'use strict';

const { TOTAL_DIGITS } = require('./constants/constants');
const generateNumbers = require('./generateNumbers');
const {
  terminal,
  getInput,
  printOut,
} = require('./ask');
const calculateBullsAndCows = require('./calculateBullAndCows');

const bullsAndCowsGame = async() => {
  const randomNumber = generateNumbers();
  let guessNumber = '';
  let attempts = 0;

  while (guessNumber !== randomNumber) {
    guessNumber = await getInput('Enter your guess: ');

    const isValidInput = new Set(guessNumber).size !== TOTAL_DIGITS;

    if (isValidInput) {
      printOut(`Enter ${TOTAL_DIGITS}-digits number with unique digits.`);
      continue;
    }

    attempts += 1;

    const { bulls, cows } = calculateBullsAndCows(randomNumber, guessNumber);

    const isNumberGuessed = bulls === TOTAL_DIGITS;

    if (isNumberGuessed) {
      printOut(
        `Congratulations! You guessed the number in ${attempts} attempts.`,
      );

      terminal.close();

      break;
    }

    printOut(`Bulls: ${bulls}, Cows: ${cows}`);
  }
};

bullsAndCowsGame();
