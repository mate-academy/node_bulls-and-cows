'use strict';

const { getRandomNumber } = require('./GenerateNumber');
const { terminalActions } = require('./TerminalActions');

const secretNumber = getRandomNumber();

terminalActions(secretNumber);
