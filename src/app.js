'use strict';

const { generateNumber } = require('./generateNumber.js');
const { game } = require('./game.js');

const generatedNumber = generateNumber();
const message = 'Enter your number -> ';

game(message, generatedNumber);
