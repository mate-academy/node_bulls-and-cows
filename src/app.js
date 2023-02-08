'use strict';

const { generateNumber } = require('./generateNumber.js');
const { gameDisplay } = require('./gameDisplay.js');

const randomNumber = generateNumber();
const defaultMessage = 'Game is started -> ';

gameDisplay(defaultMessage, randomNumber);
