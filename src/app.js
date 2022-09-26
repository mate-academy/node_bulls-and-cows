/* eslint-disable no-console */
'use strict';

const { numsToGuess } = require('./generateNumber');
const { game } = require('./game');

console.log(`Guessed numbers: ${numsToGuess}`);

game();
