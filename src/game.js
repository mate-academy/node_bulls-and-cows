'use strict';

const { bullsAndCowsCheck } = require('./check');
const messages = require('./messages');

const play = (computerNumber, userInput) => {
  if (userInput.length !== 4) {
    return messages.error;
  }

  const {
    bullCount,
    cowCount,
  } = bullsAndCowsCheck(computerNumber, userInput);

  // eslint-disable-next-line no-console
  console.log(`Bulls: ${bullCount}, cows: ${cowCount}`);

  return messages.retry;
};

module.exports = { play };
