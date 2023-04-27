/* eslint-disable no-console */
'use strict';

const { generateDigits } = require('./generateDigits');
const { terminal } = require('./terminal');
const conceivedDigits = generateDigits();

function askQueston() {
  let bulls = 0;
  let cows = 0;

  terminal.question('Guess the number ', (guessedNumber) => {
    const guessedDigits = guessedNumber.split('').map(Number);

    for (let i = 0; i < guessedDigits.length; i++) {
      if (conceivedDigits[i] === guessedDigits[i]) {
        bulls++;
      } else if (conceivedDigits.includes(guessedDigits[i])) {
        cows++;
      }
    }

    if (bulls === 4) {
      console.log('You WON!');
      terminal.close();
    } else {
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);
      askQueston();
    }
  });
}

module.exports.askQueston = askQueston;
