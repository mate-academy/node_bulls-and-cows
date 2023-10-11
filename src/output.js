'use strict';

const {
  OUTPUT_MESSAGE,
  bullsMessage,
  cowsMessage,
  NUMBER_LENGTH,
} = require('./constants');

const output = ({ bulls, cows }) => {
  if (bulls.length === NUMBER_LENGTH) {
    return OUTPUT_MESSAGE.win;
  }

  if (!bulls.length && !cows.length) {
    return OUTPUT_MESSAGE.noMatch;
  }

  return OUTPUT_MESSAGE.roundResult
    + `${bullsMessage(bulls)} and ${cowsMessage(cows)}`;
};

module.exports = {
  output,
};
