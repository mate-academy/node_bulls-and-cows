/* esling-disable no-console */
'use strict';

const readLine = require('readline');
const { generateRandomNumbers } = require('./numberGenerator');
const { calculateBullsAndCows } = require('./bullsAndCowsCalculator');

const terminal = readLine.createInterface(
  process.stdin,
  process.stdout
);

const secretNumber = generateRandomNumbers();

function playBullsAndCows() {
  terminal.question('Enter your guess (4 different numbers): ', (guess) => {
    const normalizedGuess = guess.trim();
    const result = calculateBullsAndCows(
      secretNumber.split(''),
      normalizedGuess.split('')
    );

    if (normalizedGuess.length !== 4) {
      console.log('Invalid input. Please enter 4 different digits');
      playBullsAndCows();

      return;
    }

    if (result.bulls !== 4) {
      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
      playBullsAndCows();
    } else {
      console.log(`Bulls: ${result.bulls}. You win!`);
      terminal.close();
    }
  });
}

playBullsAndCows();
