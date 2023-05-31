/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getHint } = require('./getHinit');

const bullsAndCows = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createSecret(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const hiddenNum = createSecret(1000, 9999);

function askQuestion() {
  bullsAndCows.question('Wright your guess: ', (guess) => {
    if (guess.length !== 4) {
      console.log("Don't right guess length, length should be 4");
      askQuestion();

      return;
    }

    if (+guess === hiddenNum) {
      console.log(`Yow won!!! Secret was ${hiddenNum}`);
      bullsAndCows.close();

      return;
    }

    console.log(getHint(String(hiddenNum), guess));
    askQuestion();
  });
}

askQuestion();
