'use strict';

const { generateRandomNumber } = require('./generateRandomNumber.js');
const { calculatingBullsAndCows } = require('./calculatingBullsAndCows.js');
const { game } = require('./inputAndOutputOperations.js');

const secretNumber = generateRandomNumber();

game(secretNumber, calculatingBullsAndCows);
