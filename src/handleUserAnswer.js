/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { generateNumber } = require('./generateNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

const generatedNumber = generateNumber();

console.log(generatedNumber);

const handleUserAnswer = (answer) => {
  const isContainUniqueDigits = new Set(answer).size === 4;
  const isNumber = isNaN(answer);

  if (!isContainUniqueDigits || isNumber) {
    console.error('Error. Wrong input.');

    terminal.question(
      'Enter a number of 4 different digits: ',
      handleUserAnswer,
    );

    return;
  }

  if (answer === generatedNumber) {
    console.log('Congrats!!! You won!!!');
    terminal.close();

    return;
  }

  const result = calculateBullsAndCows(answer, generatedNumber);

  console.log(
    `Guessed ${result.bulls} bulls and ${result.cows} cows! Try again :3`
  );
  terminal.question('Enter a number of 4 different digits: ', handleUserAnswer);
};

exports.handleUserAnswer = handleUserAnswer;
