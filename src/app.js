'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);

const numberToGuess = generateRandomNumber();
let isFirstAttempt = true;
const print = (message) => terminal.write(message + '\n');

const askQuestion = () => {
  const prompt = isFirstAttempt
    ? `I generated a number of 4 different digits. Please, guess a number :)\n`
    : 'Your guess:\n';

  terminal.question(prompt, (userInput) => {
    isFirstAttempt = false;

    if (!checkIsValidUserInput(userInput)) {
      print('Your input is invalid, please, try again :)');

      return askQuestion();
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    print(`bulls: ${bulls}, cows: ${cows}\n`);

    if (bulls === 4) {
      print('Congratulations!');

      return terminal.close();
    }

    askQuestion();
  });
};

askQuestion();
