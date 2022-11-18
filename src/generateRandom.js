'use strict';

const getFourRandomDigits = () => {
  let digitsString = '';

  while (digitsString.length < 4) {
    const randomDigit = String(Math.random()).slice(-1);

    if (!digitsString.includes(randomDigit)) {
      digitsString += randomDigit;
    }
  }

  return digitsString;
};

module.exports = { getFourRandomDigits };
