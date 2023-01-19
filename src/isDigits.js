'use strict';

const isDigits = (userInput) => {
  for (const char of userInput) {
    if (isNaN(+char)) {
      return false;
    }
  }

  return true;
};

module.exports = { isDigits };
