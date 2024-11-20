'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

function app() {
  checkIsValidUserInput(generateRandomNumber());

  return getBullsAndCows;
}

module.exports = {
  app,
};
