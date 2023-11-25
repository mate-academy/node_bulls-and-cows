'use strict';

const checkDigits = (input, answer) => {
  const digits = input.split('');
  let bulls = 0;
  let cows = 0;

  if (digits.some(digit => isNaN(digit))) {
    return 'Only numbers are allowed!';
  }

  if (digits.length !== 4) {
    return 'You must enter 4 digits';
  }

  if ([...new Set(digits)].length !== 4) {
    return 'No duplicates!';
  }

  for (const digit of digits) {
    if (digits.indexOf(digit) === answer.indexOf(digit)) {
      bulls += 1;
      continue;
    }

    if (answer.includes(digit)) {
      cows += 1;
    }
  };

  return bulls === 4 ? 'You won!' : `Bulls: ${bulls}, Cows: ${cows}`;
};

module.exports = {
  checkDigits,
};
