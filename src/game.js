'use strict';

const readline = require('readline');
const { getBullsAndCows } = require('./getBullsAndCows');
const winston = require('winston');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

const game = (
  message,
  randomNumber
) => {
  terminal.question(
    message,
    (guess) => {
      if (guess.length !== 4
      || guess.split('').some(num => isNaN(+num))
      || new Set(guess).size !== randomNumber.length
      ) {
        logger.error('Your guess should be in the form'
        + 'of a number consisting of 4 unique digits.');
        game('Try again!', randomNumber);
      } else {
        const result = getBullsAndCows(randomNumber, guess);

        if (result.result) {
          terminal.close();
          logger.info(result.message);
        } else {
          logger.info(result.message);
          game('You are almost there! Keep trying.', randomNumber);
        }
      }
    });
};

module.exports = { game };
