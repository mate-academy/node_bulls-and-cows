'use strict';

const INPUT_MESSAGE = {
  enterNumber: 'Please enter a number of 4 digits ',
  enterCorrectNumber: 'Please enter correct number of 4 digits ',
};

const OUTPUT_MESSAGE = {
  default: '',
  noMatch: 'no match',
  win: 'you won!',
};

const bullsMessage = (bulls) => {
  switch (bulls.length) {
    case 1: return `guessed digit ${bulls[0]} is on it's place `;
    case 2: return `guessed digits ${bulls[0]} and ${bulls[1]} `
    + `are on their places `;
    case 3: return `guessed digits ${bulls[0]}, ${bulls[1]} and ${bulls[2]} `
    + `are on their places `;
    case 4: return OUTPUT_MESSAGE.win;
    default: return OUTPUT_MESSAGE.default;
  };
};

const cowsMessage = (cows) => {
  switch (cows.length) {
    case 1: return `digit ${cows[0]} is present but on wrong place`;
    case 2: return `digits ${cows[0]} and ${cows[1]} `
    + `are present but on wrong places`;
    case 3: return `digits ${cows[0]}, ${cows[1]} and ${cows[2]} `
    + `are present but on wrong places`;
    case 4: return `all digits are present but on wrong places`;
    default: return OUTPUT_MESSAGE.default;
  };
};

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  bullsMessage,
  cowsMessage,
};
