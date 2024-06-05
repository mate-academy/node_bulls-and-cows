'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

if (!checkIsValidUserInput(process.argv[2])) {
  throw new Error('Invalid input');
}

// eslint-disable-next-line no-console
console.log(getBullsAndCows(+process.argv[2], generateRandomNumber()));
