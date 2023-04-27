'use strict';

const { terminal } = require('./terminal');
const { handleUserAnswer } = require('./handleUserAnswer');

terminal.question('Enter a number of 4 different digits: ', handleUserAnswer);
