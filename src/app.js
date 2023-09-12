'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./numberGenerator');
const { calculateBullsAndCows } = require('./bullsAndCowsCalculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

function log(message) {
  process.stdout.write(`${message}\n`);
}

function playGame() {
  rl.question('Enter your guess: ', (guessedNumber) => {
    // Check if the guessed number is valid
    if (guessedNumber.length !== 4 || !/^\d{4}$/.test(guessedNumber)) {
      log('Invalid guess. Please enter a 4-digit number.');
      playGame();

      return;
    }

    const result = calculateBullsAndCows(secretNumber, guessedNumber);

    if (result.bulls === 4) {
      log('Congratulations! You guessed the correct number!');
      rl.close();
    } else {
      playGame();
    }
  });
}

playGame();
