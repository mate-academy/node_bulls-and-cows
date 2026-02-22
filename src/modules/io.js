'use strict';

const readline = require('readline');
const { getBullsAndCows } = require('./getBullsAndCows');
const { checkIsValidUserInput } = require('./checkIsValidUserInput');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * @param {number} numberToGuess - The number to guess
 * @param {string} message - The message to display when prompting the user
 */
function prompt(numberToGuess, message = 'Enter your guess: ') {
  rl.question(message, (answer) => {
    if (!checkIsValidUserInput(answer)) {
      return prompt(numberToGuess, 'Enter correct guess: ');
    }

    const result = getBullsAndCows(answer, numberToGuess);

    if (result.bulls === 4) {
      print('Congratulations! You guessed the number!');

      return close();
    }

    print(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
    prompt(numberToGuess, 'Enter your guess: ');
  });
}

function print(message) {
  // eslint-disable-next-line no-console
  console.log(message);
}

function close() {
  rl.close();
}

module.exports = {
  prompt,
  print,
  close,
};
