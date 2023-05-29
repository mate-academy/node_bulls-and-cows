'use strict';

const { generateNumber } = require('./modules/generateNumber');
const { makeTry } = require('./modules/makeTry');

const winCombination = generateNumber();

// eslint-disable-next-line no-console
console.log('Hi! This is Bulls & Cows game.');

makeTry(winCombination);
