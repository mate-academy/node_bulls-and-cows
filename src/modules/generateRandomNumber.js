'use strict';

const { floor, random } = Math;
const DIGITS = 4;
const INITIAL_DEQUE = new Array(10).fill(0).map((_, index) => index);

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const deque = [...INITIAL_DEQUE];

  let dequeIndex = randomInt(1, deque.length);
  let digit = deque.splice(dequeIndex, 1)[0];
  let number = digit;

  for (let i = 1; i < DIGITS; i++) {
    number *= 10;

    dequeIndex = randomInt(0, deque.length);
    digit = deque.splice(dequeIndex, 1)[0];

    number += digit;
  }

  return number;
}

function randomInt(from, to) {
  return from + floor(random() * (to - from));
}

module.exports = {
  generateRandomNumber,
};
