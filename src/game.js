'use strict';

const readline = require('readline');
const emoji = require('node-emoji');
const { randomize } = require('./randomize');
const { handlingErrors } = require('./handlingErrors');
const { countBullsAndCows } = require('./countBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let randomNumber;

const gameChecker = (playerNumber) => {
  try {
    handlingErrors(playerNumber);

    const {
      countBulls,
      countCows,
    } = countBullsAndCows(randomNumber, playerNumber);

    if (countBulls < 4) {
      terminal.write(
        `\nGreat try, You Score: ${countBulls} - ${emoji.get(':ox:')}`
        + ` Bulls and ${countCows} - ${emoji.get(':cow2:')} Cows!\n`
      );

      terminal.question(
        'Ok, let\'s try one more time!\nEnter your number: ',
        gameChecker,
      );
    }

    if (countBulls === 4) {
      terminal.write(
        `\nWoow, ${emoji.get(':star2:')} You WIN ${emoji.get(':star2:')}`
        + ` My Congratulations!${emoji.get(':tada:')}\n\n`
      );

      terminal.question(
        'Would you like to play one more time?\n'
        + 'Enter \'yes\' to restart the game or \'no\' to quit: ',
        restartGame,
      );
    }
  } catch (error) {
    terminal.write(`\n${emoji.get(':skull:')} Wrong input: ${error.message}\n`);

    terminal.question(
      'Let\'s try again!\nEnter your number: ',
      gameChecker,
    );
  }
};

const restartGame = (input) => {
  if (input.trim().toLowerCase() === 'yes') {
    bullsAndCows();

    return;
  }

  if (input.trim().toLowerCase() === 'no') {
    terminal.close();

    return;
  }

  terminal.question(
    `\n${emoji.get(':skull:')} Error: ${input}, please enter 'yes' or 'no': `,
    restartGame,
  );
};

const bullsAndCows = () => {
  randomNumber = randomize();

  terminal.write(
    '\nWelocome to the game '
    + `"${emoji.get(':ox:')} Bulls & Cows${emoji.get(':cow2:')} "`
    + '\n\nLet the game begin!\n'
  );

  terminal.question(
    'Try to guess the number with 4 different digits: ',
    gameChecker,
  );
};

module.exports = {
  bullsAndCows,
};
