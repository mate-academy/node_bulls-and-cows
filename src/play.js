/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getHint } = require('./getHint');
const { validInput } = require('./validInput');

function play(secretNumber) {
  function guessNumber(guess) {
    const isValid = validInput(guess);

    if (isValid) {
      speakWithUser(isValid, guessNumber);
    } else {
      const hint = getHint(secretNumber, guess);

      if (hint) {
        speakWithUser(hint, guessNumber);
      } else {
        console.log('You Goddamn right');
        terminal.close();
      }
    }
  }

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function speakWithUser(message, func) {
    terminal.question(message, func);
  }

  speakWithUser('What is the guessed number? ', guessNumber);
}

module.exports.play = play;
