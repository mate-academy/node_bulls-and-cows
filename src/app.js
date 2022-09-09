'use strict';

const { getRandomInteger } = require('./getRandomInteger');

const game = require('./game');

const target = String(getRandomInteger(1000, 9999));

game(target);
