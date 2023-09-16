/* eslint-disable max-len */
'use strict';

const { getRandomNumber } = require('./getRandomNumber');
const { game } = require('./game');

const number = getRandomNumber();

game(
  'Let`s play Bulls and cows game! Try to guess the number with 4 different digits. Bulls are guessed digits on its place and cows are guessed digits in wrong place.',
  number
);
