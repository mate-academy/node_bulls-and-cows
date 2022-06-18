'use strict';

const readline = require('readline');
const { randomizer } = require('./randomizer');
const { game } = require('./game');

const randomNumber = randomizer();

const starter = function() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Please enter 4 numbers: ', (userInput) => {
    const userAnswer = userInput.split('');

    const games = game(randomNumber, userAnswer);

    if (games === true) {
      rl.close();
      // eslint-disable-next-line no-console
      console.log(`You won. The number was - ${userInput}`);
    } else {
      // eslint-disable-next-line no-console
      console.log(games);
      rl.close();
      starter();
    }
  });
};

starter();
