'use strict';

const randomNumber = require('./generateNumber');
const game = require('./calculateBullsAndCows');

game(randomNumber());
