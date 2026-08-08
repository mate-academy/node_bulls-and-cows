'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const readline = require('readline');

const numberRandom = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function palpite() {
  rl.question('digite 4 numeros inteiros de 0 a 9: ', (res) => {
    if (checkIsValidUserInput(res)) {
      const result = getBullsAndCows(res, numberRandom);

      if (result.bulls === 4) {
        rl.close();
      } else {
        palpite();
      }
    } else {
      palpite();
    }
  });
}

palpite();
