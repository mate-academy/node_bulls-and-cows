'use strict';

const randomFourDigits = () => {
  let result = '';

  do {
    const random = String(Math.round(Math.random() * 9 + 0));

    if (!result.includes(random)) {
      result += random;
    }
  } while (result.length !== 4);

  return result;
};

module.exports = { randomFourDigits };
