/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./generateRandomNumber.js');
const { terminal } = require('./terminal.js');
const { checkIsValidUserInput } = require('./checkIsValidUserInput.js');
const { getBullsAndCows } = require('./getBullsAndCows.js');

const newGame = () => {
  const randomNumber = generateRandomNumber();

  return getGame(randomNumber);
};

const getGame = (randomNumber) => {
  terminal.question(
    'Guess the number of 4 different digits, starts from 1: ',
    (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        console.log('(◕ ▃ ◕) Please enter 4 unique digits, starts from 1!');
        getGame(randomNumber);
      } else {
        const { bulls, cows } = getBullsAndCows(userInput, randomNumber);

        if (bulls === 4) {
          console.log('(=^・^=) You won! This is the correct number!');

          terminal.question('Do yoy wanna play again? Y/N?: ', (answer) => {
            if (answer.toLocaleLowerCase() === 'y') {
              newGame();
            } else {
              console.log('(◕ ᴥ ◕) Bye!');
              terminal.close();
            }
          });
        } else if (bulls || cows) {
          console.log(
            `(◔ ╭╮ ◔) Try again, You found ${bulls} bulls in the right place and ${cows} cows`
          );
          getGame(randomNumber);
        } else {
          console.log(`(◔ ╭╮ ◔) Try again, You didn't find anything for this shot`);
          getGame(randomNumber);
        }
      }
    });
};

module.exports = { newGame };
