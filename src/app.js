/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getRandomNumber } = require('./generateNumbers.js');
const { guss } = require('./bullsCows.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = getRandomNumber();
let tryingCount = 0;

conversation();

// ================================= functions ===================
// ================================= functions ===================
// ================================= functions ===================

function conversation() {
  console.log(answer, '<--- answer');

  terminal.question(
    'W rite 4 different numbers '
    , (inp) => {
      if (isNaN(+inp)
        || inp.trim().length !== 4) {
        conversation();
      }

      tryingCount++;

      if (answer === inp) {
        console.log(
          `4 bulls -- YOU WIN -- You finded answer from ${tryingCount} try`
        );
        terminal.close();

        return;
      }

      console.log(guss(answer, inp));
      conversation();
    });
}
