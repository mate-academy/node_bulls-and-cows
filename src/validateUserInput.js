'use strict';

function validateUserInput(userInput) {
  const digits = userInput.split('');
  const areNotOnlyDigits = digits.some(digit => isNaN(Number(digit)));
  const areNotDifferentDigits = digits.some((digit, index) => {
    const range = digits.slice(index + 1);

    return range.includes(digit);
  });

  if (userInput.length !== 4) {
    return '\n ***    You must write exactly 4 digits!    *** \n';
  }

  if (userInput.includes(',') || userInput.includes(' ')) {
    return '\n ***You must write only digits without coma or whitespace!*** \n';
  }

  if (areNotOnlyDigits) {
    return '\n ***    You must write only digits!   *** \n';
  }

  if (areNotDifferentDigits) {
    return '\n ***    You must write different digits!    *** \n';
  }
}

module.exports = validateUserInput;
