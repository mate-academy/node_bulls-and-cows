'use strict';

const DEFAULT_ANSWER_VALUE = {
  bulls: 0,
  cows: 0,
};

const QUESTION = 'Please enter your 4-digit guess: ';
const INVALID_INPUT_MESSAGE = 'Expecting a number of 4 different digits\n';
const WINNER_MESSAGE = "Congratulations! You've guessed the number!";

const EXPECTED_NUMBER_LENGTH = 4;

module.exports = {
  DEFAULT_ANSWER_VALUE,
  QUESTION,
  INVALID_INPUT_MESSAGE,
  WINNER_MESSAGE,
  EXPECTED_NUMBER_LENGTH,
};
