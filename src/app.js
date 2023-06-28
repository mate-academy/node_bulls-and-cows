'use strict';

const { guessNumber } = require('./guessNumber');
const { generateNumber } = require('./generateNumber');

guessNumber(generateNumber(), 'Guess the number: ');
