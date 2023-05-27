
'use strict';

const { generateDigits } = require('./generateDigits');
const { guessNumber } = require('./guessNumber');

const digits = generateDigits();

guessNumber(digits);
