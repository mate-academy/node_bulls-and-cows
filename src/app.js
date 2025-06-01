'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

class GameLogger {
  static log(message) {
    process.stdout.write(`${message}\n`);
  }

  static error(message) {
    process.stderr.write(`${message}\n`);
  }
}

class BullsAndCowsGame {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.numberToGuess = generateRandomNumber();
  }

  start() {
    GameLogger.log(
      'Welcome to Bulls and Cows! Try to guess the 4-digit number.',
    );
    this.playGame();
  }

  playGame() {
    this.rl.question('Enter your guess: ', (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        GameLogger.error(
          'Invalid input! Please enter a 4-digit, not starting with 0.',
        );

        return this.playGame();
      }

      const guess = Number(userInput);
      const { bulls, cows } = getBullsAndCows(guess, this.numberToGuess);

      GameLogger.log(`Result: ${bulls} bulls, ${cows} cows`);

      if (bulls === 4) {
        GameLogger.log(
          `Congratulations! You guessed the number ${this.numberToGuess}!`,
        );
        this.rl.close();
      } else {
        this.playGame();
      }
    });
  }
}

// Start the game
new BullsAndCowsGame().start();
