'use strict';

const { getRandomNumber } = require('./getRandomNumber');
const terminal = require('./terminal');

const winNum = getRandomNumber();

terminal.terminalJob(winNum);
