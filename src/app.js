'use strict';

const { getRandomNumber } = require('./getRandomNumber');
const { terminalOperation } = require('./terminalOperation');

const secretNumber = getRandomNumber();

terminalOperation(secretNumber);
