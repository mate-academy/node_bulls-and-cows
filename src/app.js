'use strict';
const readline = require('readline');
const { game } = require('./bulls_or_cows');
const { randomNumber } = require('./random_number');

function gameBullsAndCows() {
  const anyNymber = randomNumber();

  const recursiveGame = function() {
    const terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    terminal.question(
      'The "Bulls & Cows" game! Please write your four digits number ',
      async(userNumber) => {
        const userNumberCut = userNumber.slice(0, 4);
        const answer = game(anyNymber, userNumberCut);

        if (answer.includes('Greate')) {
          terminal.close();
        } else {
          terminal.close();
          recursiveGame();
        }
      }
    );
  };

  return recursiveGame();
};

gameBullsAndCows();
