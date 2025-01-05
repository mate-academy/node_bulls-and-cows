'use strict';

// Write your code here
const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

terminal.setPrompt(`Welcome to Bulls and Cows.

Try guessing the number I just came up with.

It is a 4 digit one, its first digit is not zero and it's composed by unique digits.

For every guess of yours, I'll give you hints in the following format: "x Bulls and y Cows", such that:
 - x is the number of digits in your guess that fall in the same place as my number
 - y is the number of digits in your guess that are not in the same place as my number, but are present in it

Please enter your guess:
`);
terminal.prompt();

terminal.on('line', (userInput) => {
  if (+userInput === numberToGuess) {
    terminal.setPrompt('Wow, congrats you guessed it!\n\nExiting game...\n\n');
    terminal.prompt();
    terminal.close();

    return;
  }

  if (!checkIsValidUserInput(userInput)) {
    terminal.setPrompt('The answer given is not valid.\n\nYour guess:\n');
  } else {
    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    terminal.setPrompt(`${bulls} Bulls and ${cows} Cows\n\nYour guess:\n`);
  }
  terminal.prompt();
});
