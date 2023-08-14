'use strict';

const { askNumber, writeResult, finishGame } = require('./terminal');
const { countBullsAndCows } = require('./bullsAndCows');
const { NUMBER_OF_DIGITS } = require('./constants');

const isUniqueDigits = (numberArray) => {
  const set = new Set(numberArray);

  return numberArray.length === set.size;
};

const checkTurn = (userNumber) => {
  if (isNaN(userNumber)) {
    writeResult('You entered invalid number');
    finishGame();

    return;
  }

  if (userNumber.length !== NUMBER_OF_DIGITS) {
    writeResult(`Number should contains ${NUMBER_OF_DIGITS} digits`);
    finishGame();

    return;
  }

  const userNumberArr = userNumber.split('').map(Number);

  if (!isUniqueDigits(userNumberArr)) {
    writeResult(`Number should contains ${NUMBER_OF_DIGITS} unique digits`);
    finishGame();

    return;
  }

  const gameResult = countBullsAndCows(userNumberArr);

  if (gameResult.includes(`${NUMBER_OF_DIGITS} Bulls`)) {
    writeResult('You won!');
    finishGame();

    return;
  }

  writeResult(gameResult);
  askNumber(checkTurn);
};

askNumber(checkTurn);
