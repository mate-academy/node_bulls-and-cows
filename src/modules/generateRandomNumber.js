'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numbers = [];
  const numLength = 4;

  for (let i = 0; i < numLength; i++) {
    const num = randIntFromArr(numsArr);

    if (!numbers.length) {
      numsArr.push(0);
    }

    numbers.push(num);
    numsArr.splice(numsArr.indexOf(num), 1);
  }

  return +numbers.join('');

  function randIntFromArr(arr) {
    const randInd = Math.floor(Math.random() * arr.length);

    return arr[randInd];
  }
}

module.exports = {
  generateRandomNumber,
};
