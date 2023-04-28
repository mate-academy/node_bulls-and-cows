'use strict';
/* eslint-disable no-console */

const { getRandomNumber } = require('./generateRandomNumber');
const { calculateAnimals } = require('./calculateAnimals');
const { terminal } = require('./terminal');
const dotenv = require('dotenv');
const {
  UNIQUE_NUMBER_ERROR,
  NUMBER_LENGTH_ERROR,
  TYPEOF_ERROR,
  YOU_WIN,
  ANSWER_ERROR,
  SEE_YOU,
  ENTER_THE_NUMBER,
} = require('./constants');

dotenv.config();

const {
  WELCOME,
  START,
  CONTINUE,
  EXIT,
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
