'use strict';

const NUMBER_LENGTH = 4;

const REGEXP = /0-9/;

const INPUT_MESSAGE = {
  enterNumber: `Please enter a number of ${NUMBER_LENGTH} digits: `,
  enterCorrectNumber: 'Incorrect number! Please, try again: ',
};

const bullsMessage = (bulls) => {
  switch (bulls.length) {
    case 1: return 'one bull';
    default: return `${bulls.length} bulls`;
  };
};

const cowsMessage = (cows) => {
  switch (cows.length) {
    case 1: return 'one cow';
    default: return `${cows.length} cows`;
  };
};

const OUTPUT_MESSAGE = {
  noMatch: 'No match',
  win: 'Congratulations! You won!',
  roundResult: `The result is `,
};

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  bullsMessage,
  cowsMessage,
  NUMBER_LENGTH,
  REGEXP,
};
