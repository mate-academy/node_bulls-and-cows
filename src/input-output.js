'use strict';

const readline = require('readline');
const { calculateBullsAndCows } = require('./bulls-and-cows-calculator');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printWelcomeMessage() {
  console.log('Welcome to the Bulls & Cows game!');
}

function printNumsWasGenerate(length) {
  let preview = '';

  for (let i = 0; i < length; i++) {
    preview += '*';
  }

  console.log(`Number was generate (${preview})`);
}

function checkInputDigitsIsValid(input, length) {
  const mapInput = new Set(input.split(''));

  if (mapInput.size !== length || input.length !== length) {
    return false;
  }

  return true;
}

function enterNumberOfDigits() {
  return new Promise((resolve, reject) => {
    terminal.question('Enter the number of digits in the game: ', (input) => {
      const numberInput = Number(input);

      if (isNaN(numberInput)) {
        reject('The number of digits should contain only digits!!');
      } else if (+input < 0 || +input > 10) {
        reject('The number of digits can\'t be negative or more than 10!');
      }

      resolve(input);
    });
  });
}

function enterGuess(generatedNumbers, questionMessage) {
  terminal.question(questionMessage, (nums) => {
    if (!checkInputDigitsIsValid(nums, generatedNumbers.length)) {
      console.log(
        `You have to write ${generatedNumbers.length} different digits!`
      );
      enterGuess(generatedNumbers, questionMessage);
    } else if (nums === generatedNumbers) {
      console.log('Congratulations, you won!');
      terminal.close();
    } else {
      console.log(calculateBullsAndCows(nums, generatedNumbers));
      enterGuess(generatedNumbers, questionMessage);
    }
  });
}

module.exports = {
  printWelcomeMessage,
  printNumsWasGenerate,
  enterNumberOfDigits,
  enterGuess,
};
