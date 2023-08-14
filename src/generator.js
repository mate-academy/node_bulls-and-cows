'use strict';

const generator = () => {
  const digits = Array.from({ length: 10 }, (_, i) => i);
  const shuffledDigits = shuffleArray(digits.slice(1));

  const uniqueNumber = shuffledDigits.slice(0, 3).join('') + shuffledDigits[3];

  return parseInt(uniqueNumber);
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

module.exports = {
  generator,
};
