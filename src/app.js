'use strict';

const { generateFourDigitNumber } = require('./numGenerator');
const playerLogic = require('./terminalOperations');

const winNum = generateFourDigitNumber();

playerLogic.communicateWithPlayer(winNum);
