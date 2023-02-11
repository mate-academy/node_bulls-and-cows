'use strict';

const { guessNumber } = require('./guessNumber');

const numberGenerator = require('./numberGenerator').numberGenerator;

const randomNumber = numberGenerator();

guessNumber(randomNumber, 'Guess the number\n');
