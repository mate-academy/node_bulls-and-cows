'use strict';
/* eslint-disable no-console */

const { getRandomNumber } = require('./generateRandomNumber');
const { calculateAnimals } = require('./calculateAnimals');
const { terminal } = require('./terminal');
const dotenv = require('dotenv');

dotenv.config();

const {
  ENTER_THE_NUMBER,
  WELCOME,
  YOU_WIN,
  START,
  CONTINUE,
  SEE_YOU,
  NUMBER_LENGTH_ERROR,
  EXIT,
  UNIQUE_NUMBER_ERROR,
  ANSWER_ERROR,
  TYPEOF_ERROR,
} = process.env;

const randomNumber = getRandomNumber();

console.log(WELCOME);

const playGame = () => {
  setTimeout(() => {
    terminal.question(START, (answer) => {
      if (answer === CONTINUE) {
        const game = () => {
          terminal.question(ENTER_THE_NUMBER, (userNumber) => {
            if (userNumber.length !== 4) {
              console.log(NUMBER_LENGTH_ERROR);
              game();

              return;
            }

            if (isNaN(+userNumber)) {
              console.log(TYPEOF_ERROR);
              game();

              return;
            }

            if (userNumber.length !== new Set(userNumber).size) {
              console.log(UNIQUE_NUMBER_ERROR);
              game();

              return;
            }

            const { bulls, cows } = calculateAnimals(randomNumber, userNumber);

            if (bulls === 4) {
              console.log(YOU_WIN);
            } else {
              console.log(`Bulls: ${bulls}, Cows: ${cows}`);
              game();
            }
          });
        };

        game();
      } else if (answer !== EXIT && answer !== CONTINUE) {
        console.log(ANSWER_ERROR);
        playGame();
      } else if (answer === EXIT) {
        console.log(SEE_YOU);
        terminal.close();
      }
    });
  }, 3000);
};

module.exports = { playGame };
