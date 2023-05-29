'use strict';

const { randomNumber } = require('./randomNumber');
const { guessNumber } = require('./guessNumber');

const number = randomNumber();

guessNumber(number);
