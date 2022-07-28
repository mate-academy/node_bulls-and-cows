/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { animalCounter } = require('./animalCounter');

(function game() {
  terminal.question('Please guess the secret four-digit number ', (num) => {
    const { cowCount, bullCount } = animalCounter(num);

    const uniqueInput = Array.from(new Set(num));

    if (uniqueInput.length !== 4 || isNaN(num)) {
      console.log('Please enter four different numbers!');
      game();
    } else {
      if (bullCount >= 4) {
        console.log(
          `\tCongratulations, you won!
        Your result: ${bullCount} bulls and ${cowCount} cows`
        );
        terminal.close();
      } else {
        console.log(`Bulls: ${bullCount} Cows: ${cowCount}`);
        game();
      }
    }
  });
})();
