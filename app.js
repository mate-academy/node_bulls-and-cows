'use strict';

const { getRandomNumber } = require('./src/getRandomNumber');
const { game } = require('./src/game');

const secretNumber = getRandomNumber();

game(secretNumber);
