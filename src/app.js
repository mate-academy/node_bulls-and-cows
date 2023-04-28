/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { userPrompt1, userPrompt2, userPrompt3 } = require('./utils/prompts');
const { get4random } = require('./utils/get4random');
const { check4input } = require('./utils/check4input');
const { countResult } = require('./utils/countResult');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const countBullsAndCows = (userName, random4, guess) => {
  if (guess === random4.join('')) {
    console.log('\nCongratulations - YOU WON !!!');
    terminal.close();

    return;
  }

  if (!check4input(guess)) {
    console.error('\nValid attempt is 4 different digits input!\n');

    terminal.question(
      userPrompt3(userName),
      (attempt) => countBullsAndCows(userName, random4, attempt),
    );
  } else {
    const result = countResult(guess, random4);

    console.log(result);

    terminal.question(
      userPrompt3(userName),
      (guess4) => countBullsAndCows(userName, random4, guess4)
    );
  }
};

const launchGame = () => {
  terminal.question(userPrompt1, (userName) => {
    const random4 = get4random();

    console.log(userPrompt2(userName));

    terminal.question(
      userPrompt3(userName),
      (guess) => countBullsAndCows(userName, random4, guess)
    );
  });
};

launchGame();
