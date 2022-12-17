/* eslint-disable no-console */
'use strict';

const { userTerminal } = require('./terminal');
const { randomNumber } = require('./randomNumber');
const { checkResult } = require('./checkResult');
const random = randomNumber();
let questionMessage = 'Write 4 different numbers';

const startGame = () => {
  console.log(random);

  userTerminal.question(questionMessage, (answer) => {
    const checkDifferentNumbers = answer
      .split('')
      .filter((item, index) => answer.indexOf(item) === index);

    if (isNaN(+answer)
      || answer.trim().length !== 4
      || checkDifferentNumbers.length !== 4) {
      startGame();

      return;
    }

    if (random === answer) {
      console.log('4 bulls YOU WIN');
    } else {
      checkResult(random, answer);
      questionMessage = 'Try again write 4 different numbers';
      startGame();
    }
  });
};

startGame();
