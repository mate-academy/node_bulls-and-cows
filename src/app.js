'use strict';

const readline = require('readline');
const generate = require('./modules/generateRandomNumber');
const score = require('./modules/getBullsAndCows');
const valid = require('./modules/checkIsValidUserInput');

const secret = generate();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = () =>
  rl.question('Твій варіант: ', (guess) => {
    if (!valid(guess)) {
      return ask();
    }

    const { bulls } = score(secret, guess);

    if (bulls === 4) {
      rl.close();
    } else {
      ask();
    }
  });

ask();
