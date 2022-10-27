'use strict';

const { randomNumbers } = require('./randomNumber.js');
const { terminal } = require('./terminal.js');
const { countBullsAndCows } = require('./countBullsAndCows.js');

let attemptCnt = 1;

const userAnswer = () => {
  terminal.question('Please enter 4 different digits\n', (numFromUser) => {
    if (numFromUser === randomNumbers) {
      terminal.write(`You guessed the number ${randomNumbers} \n
        after ${attemptCnt} attempt(s)`);
      terminal.close();
    } else if (
      numFromUser
        .toString()
        .split('')
        .every((number) => number === numFromUser.toString().split('')[0])
    ) {
      terminal.write(
        `You can't enter 4 same digits!!! \nattempt #${attemptCnt} \n`
          + countBullsAndCows(randomNumbers, numFromUser)
          + '\n'
      );
      attemptCnt += 1;
      userAnswer();
    } else if (numFromUser.length === 4) {
      terminal.write(
        `attempt #${attemptCnt} \n`
          + countBullsAndCows(randomNumbers, numFromUser)
          + '\n'
      );
      attemptCnt += 1;
      userAnswer();
    } else {
      attemptCnt += 1;
      userAnswer();
    }
  });
};

userAnswer();
