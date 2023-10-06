'use strict';

const readline = require('readline');
const { getRundomDigit } = require('./generator.js');
const { compare } = require('./comparer.js');

const secretNumber = getRundomDigit();
let triesCount = 0;
const terminal = readline.createInterface(
  process.stdin,
  process.stdout,
);

const isValid = (number) => {
  let matchAmount = 0;

  for (let currIndex = 0; currIndex < number.length; currIndex++) {
    matchAmount = 0;

    for (let compareIndex = 0; compareIndex < number.length; compareIndex++) {
      if (number[currIndex] === number[compareIndex]) {
        matchAmount++;
      }
    }

    if (matchAmount > 1) {
      return false;
    }
  }

  return true;
};

const game = (text) => {
  terminal.question(text, (number) => {
    triesCount += 1;

    if (number === String(secretNumber)) {
      terminal.write(
        `You win, number ${number} is correct\nTries - ${triesCount}`,
      );

      terminal.close();
    } else {
      if (!isNaN(number) && number.length > 3 && isValid(number)) {
        return (game(compare(secretNumber, number)));
      } else {
        return (game('Enter valid number: '));
      }
    }
  });
};

game('Please guess. ');
