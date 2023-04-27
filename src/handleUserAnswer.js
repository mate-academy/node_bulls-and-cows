/* eslint-disable no-console */
'use strict';

const { question, close } = require('./terminal');
const { generateNumber } = require('./generateNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { enterMessage, errorMessage, congratsMessage } = require('./messages');

const generatedNumber = generateNumber();

const handleUserAnswer = (answer) => {
  const isContainUniqueDigits = new Set(answer).size === 4;
  const isNotNumber = isNaN(answer);

  if (!isContainUniqueDigits || isNotNumber) {
    console.error(errorMessage);

    question(enterMessage, handleUserAnswer);

    return;
  }

  if (answer === generatedNumber) {
    console.log(congratsMessage);
    close();

    return;
  }

  const result = calculateBullsAndCows(answer, generatedNumber);

  console.log(
    `Guessed ${result.bulls} bulls and ${result.cows} cows! Try again :3`
  );

  question(enterMessage, handleUserAnswer);
};

exports.handleUserAnswer = handleUserAnswer;
