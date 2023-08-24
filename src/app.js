'use strict';

const generateFourDigitNumber = require('./numberGenerate.js');
const game = require('./inputAndOutputOperations.js');

const generatedNumber = generateFourDigitNumber();

game(generatedNumber);
