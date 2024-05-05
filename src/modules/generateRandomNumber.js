'use strict';

function shuffleArray(array) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function generateRandomNumber() {
  const randomNunbers = shuffleArray(
    Array.from({ length: 10 }, (_, index) => index),
  );

  if (randomNunbers[0] !== 0) {
    return +randomNunbers.slice(0, 4).join('');
  }

  return +randomNunbers.slice(1, 5).join('');
}

module.exports = {
  generateRandomNumber,
};
