'use strict';
/* eslint-disable no-console */

const { terminal } = require('./terminal');
const { countAnimals } = require('./counter');

(function game() {
  terminal.question('Please write a number (4 different digits only)',
    (num) => {
      const uniqueInput = Array.from(new Set(num));

      if (uniqueInput.length !== 4 || isNaN(num)) {
        console.log('Please write four different numbers!');
        game();
      }

      const { bulls, cows } = countAnimals(num);

      if (bulls === 4) {
        console.log('Congratulations! You won!');
        terminal.close();
      } else {
        console.log(`Bulls: ${bulls} Cows: ${cows}`);
        game();
      }
    });
})();
