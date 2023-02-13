'use strict';

const { getRandomNumber } = require('./getRandomNumber');
const { game } = require('./game');

const secretNumber = getRandomNumber();

game(secretNumber);
