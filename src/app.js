/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const bullsAndCows = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const hiddenNum = Math.round(Math.random() * (9999 - 1000) + 1000);

askQuestion();

function askQuestion() {
  bullsAndCows.question('Wright your guess: ', (guess) => {
    if (guess.length !== 4) {
      console.log("Don't right guess length, length should be 4");
      askQuestion();
    }

    if (+guess === hiddenNum) {
      console.log(`Yow won!!! Secret was ${hiddenNum}`);
      bullsAndCows.close();
    } else if (guess.length === 4) {
      console.log(getHint(String(hiddenNum), guess));
      askQuestion();
    }
  });
}

function getHint(secret, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    }

    if ((guess.includes(secret[i]) && secret[i] !== guess[i])
      && getCount(secret[i], secret) <= getCount(secret[i], guess)) {
      cows++;
    }
  }

  return `bulls: ${bulls}, cows: ${cows}`;
}

function getCount(n, nums) {
  return nums.split('').reduce((a, b) => {
    if (b === n) {
      return a + 1;
    }

    return a;
  }, 0);
}
