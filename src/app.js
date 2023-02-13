'use strict';

const { generateNumber } = require('./numberGenerator');
const { guessNumber } = require('./guessNumber');

const generatedNumber = generateNumber();

guessNumber(generatedNumber, 'Guess the number ');
