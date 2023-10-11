'use strict';

const { getRandomDigits } = require('./utils/getRandomDigit');
const { askForNumber } = require('./askForNumber');

const randomDigits = getRandomDigits();

askForNumber('Enter 4 unique digit: ', randomDigits);
