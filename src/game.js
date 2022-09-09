'use strict';

const readline = require('readline');
const { getCowsAndBulls } = require('./getCowsAndBulls');
const { isExact, isTargetLonger, isTargetShorter } = require('./utils');

console.clear();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lastGuess = '';
let count = 0;

function main(target) {
  count += 1;

  terminal.question('Guess a number!\n', (guess) => {
    console.clear();
    console.log(`Last guess: ${lastGuess}`);
    console.log(`Current guess: ${guess}`);

    lastGuess = guess;

    switch (true) {
      case isNaN(Number(guess)): {
        console.log('Your guess is not a number!');

        main(target);
        break;
      }

      case isTargetLonger(guess, target): {
        console.log(`Your number is shorter than ${target.length} digits`);

        main(target);
        break;
      }

      case isTargetShorter(guess, target): {
        console.log(`Your number is longer than ${target.length} digits`);

        main(target);
        break;
      }

      case isExact(guess, target): {
        console.log('You won!');
        console.log(`Answer is ${target}`);
        console.log(`Amount of attempts is ${count}`);

        terminal.close();
        break;
      }

      default: {
        const cowsAndBulls = getCowsAndBulls(guess, target);

        Object.entries(cowsAndBulls).forEach(cowBull => {
          const [index, value] = cowBull;

          console.log(`${index} - ${value}`);
        });

        main(target);
        break;
      }
    }
  });
}

module.exports = main;
