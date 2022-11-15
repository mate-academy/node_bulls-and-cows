'use strict';

const readline = require('node:readline');

function guessBullAndCows() {
  const secret = [];

  while (secret.length < 4) {
    const newNumber = Math.floor(Math.random() * 10);

    if (!secret.includes(newNumber)) {
      secret.push(newNumber);
    }
  }

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  terminal.question('Guess the secret number (4 digits): ', (guess) => {
    let bulls = 0;
    let cows = 0;
    const guessArr = guess.split('');
    const secretStr = secret.join('');

    for (let i = 0; i < secretStr.length; i++) {
      if (secretStr[i] === guess[i]) {
        bulls++;
      }
    }

    for (let j = 0; j < secretStr.length; j++) {
      if (guessArr.includes(secretStr[j])) {
        cows++;
        guessArr.splice(guessArr.indexOf(secretStr[j]), 1);
      }
    }

    // eslint-disable-next-line no-console
    console.log(`The secret was: ${secretStr}. `
    + `bulls: ${bulls}, cows: ${cows - bulls}`);
    terminal.close();
  });
};

guessBullAndCows();
