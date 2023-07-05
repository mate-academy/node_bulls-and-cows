'use strict';

const validateUserInput = (userInput) => {
  const set = new Set();
  const trimmedUserInput = userInput.trim();

  if (trimmedUserInput.length !== 4) {
    // eslint-disable-next-line no-console
    console.log('Please, write a 4-digit number. :)');

    return false;
  }

  for (const char of trimmedUserInput) {
    set.add(Number(char));
  }

  if (set.size !== 4) {
    // eslint-disable-next-line no-console
    console.log('Please, use unique digits. :)');

    return false;
  }

  return true;
};

const normalizeUserInput = (userInput) => {
  const normalizedUserInput = [];

  for (const char of userInput) {
    normalizedUserInput.push(Number(char));
  }

  return normalizedUserInput;
};

module.exports = {
  validateUserInput,
  normalizeUserInput,
};
