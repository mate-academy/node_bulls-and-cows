'use strict';

const { terminal } = require('./terminal');
const { handleInput } = require('./handleInput');

const welcomeMessage = `Welcome to the Bulls and Cows game!`;

terminal.question(`${welcomeMessage}\nEnter your digits guess: `, handleInput);
