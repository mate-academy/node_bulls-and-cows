'use strict';
/* eslint-disable no-console */

const { letsPlayGame, terminalInterface } = require('./gameProcess');

terminalInterface.question(
  'Welcome to the \'Bulls & Cows\' game! What is your name? ',
  (userName) => {
    console.log(`Hi, ${userName}! Take a guess at the number!`);
    letsPlayGame();
  }
);
