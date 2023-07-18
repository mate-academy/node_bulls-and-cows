'use strict';

const { playBullsAndCows } = require('./playBullsAndCows');
const { generateRandomNumber } = require('./generateRandomNumber');

playBullsAndCows(generateRandomNumber(), 'Enter your 4-digit number: ');
