'use strict';

const generateDigits = () => {
  const answer = [];

  while (answer.length < 4) {
    const digit = String(Math.floor(Math.random() * 10));

    if (!answer.includes(digit)) {
      answer.push(digit);
    }
  }

  return answer;
};

module.exports = {
  generateDigits,
};
