/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomNum() {
  const arr = [];

  while (arr.length < 4) {
    const number = Math.trunc(Math.random() * 10);

    if (!(arr.includes(number))) {
      arr.push(number);
    }
  }

  return arr.join('');
}

const gussedNumber = getRandomNum();

function guess(gnum, youtry) {
  let bull = 0;
  let cow = 0;

  for (let i = 0; i < gnum.length; i++) {
    if (gnum[i] === youtry[i]) {
      bull += 1;
    }

    if ((gnum[i] !== youtry[i]) && (gnum.includes(youtry[i]))) {
      cow += 1;
    }

    if (bull === 4) {
      terminal.close();
    }
  }

  return {
    bull,
    cow,
  };
}

function conversation() {
  terminal.question('Guess a number\n', (yourCase) => {
    const cases = yourCase;

    if (cases.length !== 4) {
      console.log('Number should contains 4 digits!!!');
      conversation();
    } else {
      const result = guess(gussedNumber, yourCase);

      if (result.bull === 4) {
        terminal.close();
        console.log('your are winer');
      } else {
        console.log(`bull: ${result.bull} cow: ${result.cow}`, gussedNumber);
        conversation();
      }
    }
  });
};

conversation();
