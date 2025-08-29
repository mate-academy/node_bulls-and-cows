/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const readline = require('node:readline');

const randomNumber = generateRandomNumber();

function playGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function askQuestion(question) {
    rl.question(question, (input) => {
      const trimmedInput = input.trim();

      if (!checkIsValidUserInput(trimmedInput)) {
        console.log(
          'The number is not valid. Enter a number of 4 different digits.',
        );

        return askQuestion();
      }

      const result = getBullsAndCows(trimmedInput, randomNumber);

      if (result.bulls === 4) {
        console.log('Congrats! You win!');
        rl.close();
      } else {
        console.log(
          `Your input is ${trimmedInput}. The result is ${result.bulls} bulls and ${result.cows} cows. Try again.`,
        );
        askQuestion('Guess a number 🤔 - ');
      }
    });
  }

  askQuestion('What is the number? Enter a number of 4 different digits - ');
}

playGame();
