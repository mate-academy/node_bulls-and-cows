'use strict';
/* eslint-disable no-console */

const { terminal } = require('./terminal');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { generateNumber } = require('./generateNumber');

const randomNumber = generateNumber();
const question = 'Enter a number with 4 digits to guess: ';

const isValidInput = (input) => {
  return new Set(input).size === 4 && !isNaN(input);
};

const handleUserInput = (answer) => {
  if (!isValidInput(answer)) {
    console.log('Please enter valid input');
    terminal.question(question, handleUserInput);

    return;
  }

  const { bulls, cows } = calculateBullsAndCows(randomNumber, answer);

  if (bulls === 4) {
    console.log(`Congratulations, you won!`);
    terminal.close();

    return;
  }

  console.log(`You find ${bulls} Bulls and ${cows} Cows`);
  launchGame();
};

const launchGame = () => {
  terminal.question(question, handleUserInput);
};

launchGame();
