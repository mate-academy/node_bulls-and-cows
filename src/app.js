/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const cowsOrBull = readline.createInterface(process.stdin, process.stdout);

const playGame = () => {
  const generatedNumbers = generateRandomNumber();

  console.log(generatedNumbers);

  const guess = () => {
    cowsOrBull.question(
      `Let's start our game! Try to guess the numbers: `,
      (numbers) => {
        const answer = checkIsValidUserInput(numbers);

        if (!answer) {
          console.log(
            'Ouch! That’s not it—let’s get some valid numbers in there!',
          );

          return guess();
        }

        const result = getBullsAndCows(numbers, generatedNumbers);

        if (result && result.bulls === 4) {
          console.log('Yippee! You found all my bulls! I’m over the moon!');
          cowsOrBull.close();
        } else {
          console.log(result);
          guess();
        }
      },
    );
  };

  guess();
};

playGame();
