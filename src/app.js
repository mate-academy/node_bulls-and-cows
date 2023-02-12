'use strict';

const { guessTheNumber } = require('./guessTheNumber');
const { numberGenerator } = require('./numberGenerator');

guessTheNumber('Enter your number:', numberGenerator());
