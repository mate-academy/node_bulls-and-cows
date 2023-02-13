'use strict';

const { terminal } = require('./terminal');
const { getBullsAndCows } = require('./calcBullsCows');
const { generateNumber } = require('./generateNumber');

exports.playGame = () => {
  const randomNumber = generateNumber();
  let tries = 0;

  const playRound = () => {
    terminal.question('Guess the number...', (guess) => {
      if (guess.length !== 4 || new Set(guess).size !== 4) {
        // eslint-disable-next-line no-console
        console.log('Invalid input, enter a number of 4 different digits:');
        playRound();

        return;
      }

      const { bulls, cows } = getBullsAndCows(randomNumber, guess);

      if (bulls === 4) {
        tries++;
        // eslint-disable-next-line no-console
        console.log('You won the game!', `tries: ${tries}`);
        terminal.close();
      } else {
        tries++;
        // eslint-disable-next-line no-console
        console.log(`Bulls: ${bulls}, Cows: ${cows}`);
        // eslint-disable-next-line no-console
        console.log('Enter another number:', `tries: ${tries}`);
        playRound();
      }
    });
  };

  playRound();
};
