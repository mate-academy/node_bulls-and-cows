'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { game } = require('./modules/game');

const generatedNumber = generateRandomNumber();

game(generatedNumber);
