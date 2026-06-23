'use strict';

function checkIsValidUserInput(userInput) {
  const digits = userInput.toString().split('');

  if (isNaN(Number(userInput))) {
    return false;
  }

  if (digits.length !== 4) {
    return false;
  }

  if (digits[0] === '0') {
    return false;
  }

  for (let i = 0; i < 4; i++) {
    const matches = digits.filter((digit) => digit === digits[i]);

    if (matches.length > 1) {
      return false;
    }
  }

  digits.forEach((digit) => {
    if (isNaN(Number(digit))) {
      // throw new Error('Це має бути число');
      return false;
    }
  });

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
