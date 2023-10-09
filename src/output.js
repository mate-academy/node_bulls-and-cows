'use strict';

const { OUTPUT_MESSAGE, bullsMessage, cowsMessage } = require('./constants');

const output = ({ bulls, cows }) => {
  const message = bullsMessage(bulls) + cowsMessage(cows);

  if (!message) {
    return OUTPUT_MESSAGE.noMatch;
  } else {
    return message;
  }
};

module.exports = {
  output,
};
