'use strict';

const { guessTheNumber } = require('./Components/guessTheNumber');
const { numberGenerator } = require('./Components/numberGenerator');

guessTheNumber('Enter your number:', numberGenerator());
