'use strict';

const { terminal } = require('./terminal.js');
const { compareNumbers } = require('./compareNumbers.js');

terminal.question('Guess the number. ', compareNumbers);
