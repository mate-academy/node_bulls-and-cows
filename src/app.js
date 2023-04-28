'use strict';

const { generateArrayOfNumbers } = require('./generateArrayOfRandomNumbers.js');
const { createTerminal } = require('./createTerminal.js');
const { checkNumbers } = require('./checkNumbers.js');

const launchApp = () => {
  const generatedArrOfNumbers = generateArrayOfNumbers();

  const terminal = createTerminal();

  checkNumbers(terminal, generatedArrOfNumbers);
};

launchApp();
