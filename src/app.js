'use strict';

const { terminal } = require('./terminal');
const { handleInput } = require('./inputHandler');

terminal.question('Guess the number: ', handleInput);
