'use strict';
/* eslint-disable no-console */

const { terminal } = require('./usersTerminal');
const { getFourRandomDigits } = require('./generateRandom');
const { countBullsAndCows } = require('./counter');

const randomDigits = getFourRandomDigits();

const BullsAndCowsGame = () => {
  terminal.question('Write 4 different digits: ', (usersInput) => {
    const trimmed = usersInput.split(' ').join('');

    const isFourDifferentNumbers = [...new Set(trimmed)].length === 4;

    if (isNaN(trimmed) || !isFourDifferentNumbers) {
      console.log('Please write only 4 DIFFERENT NUMBERS');
      console.log('-------------------------------------');
      BullsAndCowsGame();
    } else {
      const { bulls, cows } = countBullsAndCows(randomDigits, trimmed);

      if (bulls < 4) {
        console.log(`BULLS - ${bulls}, COWS - ${cows}. Try one more time`);
        console.log('-------------------------------------');
        BullsAndCowsGame();
      } else {
        console.log(`Bulls - ${bulls}, You won!`);
        terminal.close();
      }
    }
  });
};

BullsAndCowsGame();
