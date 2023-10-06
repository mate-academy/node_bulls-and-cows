'use strict';

const DEFAULT_ANSWER_VALUE = {
  bulls: 0,
  cows: 0,
};

const QUESTION = 'Please enter your 4-digit guess: ';
const INVALID_INPUT_MESSAGE = 'Expecting four digit number\n';
const WINNER_MESSAGE = "Congratulations! You've guessed the number!";

const MAX_NUMBER = 9999;
const MIN_NUMBER = 1000;
const EXPECTED_NUMBER_LENGTH = 4;

module.exports = {
  DEFAULT_ANSWER_VALUE,
  MAX_NUMBER,
  MIN_NUMBER,
  QUESTION,
  INVALID_INPUT_MESSAGE,
  WINNER_MESSAGE,
  EXPECTED_NUMBER_LENGTH,
};
