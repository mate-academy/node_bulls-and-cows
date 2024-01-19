'use strict';

/* eslint-disable no-console */
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const terminal = require('node:readline')
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const messages = {
  toInvite: `Let's play? Y/N\n\t`,
  toLeave: `Maybe next time?\n\tGood luck. 😉`,
  toInput: 'Please, enters a number of 4 different digits:\n\t',
  toError: `Ups!!!
  Valid input is a 4-digit number that does not start with 0
  and does not contain any duplicate digits`,
  toCongratulate:
  `Congratulations.🎉🎉🎉
  You win.💪👏`,
  toContin: `Let's play again? Y/N\n\t`,
};

function playGame(invitation) {
  terminal.question(
    invitation,
    (userInput) => {
      if (userInput.match(/^y/gi)) {
        runRound(generateRandomNumber());
      } else {
        console.log(messages.toLeave);
        terminal.close();
      }
    });
}

function runRound(numberToGuess) {
  terminal.question(
    messages.toInput,
    (userInput) => {
      if (checkIsValidUserInput(userInput)) {
        const bullsAndCows = getBullsAndCows(userInput, numberToGuess);

        if (bullsAndCows.bulls === 4) {
          console.log(messages.toCongratulate);

          playGame(messages.toContin);
        } else {
          console.log(
            `${bullsAndCows.bulls} bulls and ${bullsAndCows.cows} cows`,
            'walk in the pasture.\n\tTry again.'
          );
        }

        runRound(numberToGuess);
      } else {
        console.log(messages.toError);

        runRound(numberToGuess);
      }
    });
}

console.log(
  `Welcome to 'Bulls and cows' game.

  I generate a random 4-digit number that does not start with 0
  and does not contain any duplicate digits.

  You try to guess.

  'bull' - guessed digit is on its place (index).
  'cow' - guessed digit exists in the number but the place (index) is wrong.
  The game ends when the numbers is found.\n\n`);
/* eslint-unable no-console */

playGame(messages.toInvite);
