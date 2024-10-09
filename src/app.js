'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);

const guessNumber = generateRandomNumber();
let count = 0;

function playGame(question = '') {
  terminal.question(question, (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'It is not valid number! Input the 4 dight number, without duplicates!',
      );
      playGame('Try again!');
    } else {
      count++;

      const result = getBullsAndCows(userInput, guessNumber);

      console.log(result, '(Try', count, ')');

      if (result.bulls === 4) {
        console.log(
          'Congratulation!!! You win!!! Number is...  ',
          guessNumber,
          ` [From ${count} try!]`,
        );
        terminal.close();
      } else {
        const { bulls, cows } = result;

        if (bulls === 0 && cows === 0) {
          playGame('Dont worry, it happens...');
        }

        if (bulls === 1 || cows === 1) {
          playGame('You are on the right track!');
        }

        if (
          bulls === 2 ||
          bulls === 3 ||
          cows === 2 ||
          cows === 3 ||
          cows === 4
        ) {
          playGame('So close... Come on!');
        }
      }
    }
  });
}

console.log('Lets play the game "Bulls and Cows"!!!');
console.log('Input the 4 dight number');
playGame();
