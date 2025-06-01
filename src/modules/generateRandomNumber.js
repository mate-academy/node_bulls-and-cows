'use strict';

/**
 * Generates random 4-digit number with unique digits,
 * not starting with 0 (1000-9876 range)
 */
function generateRandomNumber() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // First digit can't be 0
  const otherDigits = [0]; // Include 0 only for remaining digits

  // Shuffle non-zero digits for first position
  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  const firstDigit = digits.pop();
  const availableDigits = [...digits, ...otherDigits];

  // Shuffle remaining digits
  for (let i = availableDigits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [availableDigits[i], availableDigits[j]] = [
      availableDigits[j],
      availableDigits[i],
    ];
  }

  return parseInt([firstDigit, ...availableDigits.slice(0, 3)].join(''), 10);
}

module.exports = { generateRandomNumber };
