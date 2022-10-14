'use strict';

const { randomNumber } = require('./numbersGenerator');

const bullsCowsCalculator = (userAnswer) => {
  let bullCounter = 0;
  let cowCounter = 0;

  for (let i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] === randomNumber[i]) {
      bullCounter++;
      continue;
    }

    if (randomNumber.includes(userAnswer[i])) {
      cowCounter++;
    }
  }

  const bull = bullCounter === 1 ? 'bull' : 'bulls';
  const cow = cowCounter === 1 ? 'cow' : 'cows';
  const answer = bullCounter === 4
    ? 'There are 4 bulls. You won!'
    : `There are ${bullCounter} ${bull} and ${cowCounter} ${cow}`;
  const isWon = bullCounter === 4;

  return {
    answer,
    isWon,
  };
};

module.exports = { bullsCowsCalculator };
