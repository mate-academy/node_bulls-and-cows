'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const terminal = readline.createInterface(process.stdin, process.stdout);

const randomNumber = generateRandomNumber();
const invalidInput = 'Invalid input try again';
let questionMessage = 'Add 4 digits';

function startGame() {
  terminal.question(questionMessage, (answer) => {
    if (!checkIsValidUserInput(answer)) {
      questionMessage = invalidInput;
      startGame();
    }

    const result = getBullsAndCows(answer, randomNumber);

    if (result.bulls === 4) {
      terminal.write('Congratulation you found it!');
      terminal.close();
    } else {
      questionMessage = `Almost you got ${result.bulls} bulls and ${result.cows} cows`;
      startGame();
    }
  });
}

startGame();
// Write your code here
