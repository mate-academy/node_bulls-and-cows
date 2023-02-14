'use strict';

const { guessingNumber } = require('./helpers/guessingNumber');
const { numberGenerator } = require('./helpers/numberGenerator');

guessingNumber('Enter your number:', numberGenerator());
