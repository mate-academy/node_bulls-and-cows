'use strict';

function checkIsValidUserInput(userInput) {
  if (userInput.length !== 4) {
    throw new Error('Input must be 4 digits long');
  }

  if (isNaN(+userInput)) {
    throw new Error('Input must be a number');
  }

  const digits = new Set(userInput.split(''));

  if (digits.size !== 4) {
    throw new Error('Input must have 4 unique digits');
  }
} 

module.exports = {
  checkIsValidUserInput,
};

