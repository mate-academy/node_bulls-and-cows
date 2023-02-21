'use strict';

const { terminal } = require('./terminal');
const { gameplay } = require('./gameplay');

terminal.question('Guess the number ', gameplay);
