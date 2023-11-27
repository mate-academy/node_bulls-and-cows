'use strict';

function isValid(userInput) {
  const digits = userInput.split('');
  const uniques = new Set([...digits]);

  if (!isNumber(userInput)) {
    throw new Error('All symbols must be numbers');
  }

  if (digits.length !== 4) {
    throw new Error('Enter 4 digits');
  }

  if (uniques.size !== 4) {
    throw new Error('All digits must be unique');
  }

  return true;
}

function isNumber(value) {
  return /^\d+$/.test(value);
}

module.exports = { isValid };
