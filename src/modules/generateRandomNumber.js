'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let { number, numberArray } = getRandomNumAndArray();

  while (new Set(numberArray).size !== 4) {
    const { number: numberRegen, numberArray: numberArrayRegen } =
      getRandomNumAndArray();

    number = numberRegen;
    numberArray = numberArrayRegen;
  }

  return number;
}

const getRandomNumAndArray = () => {
  const number = Math.floor(1000 + Math.random() * 9000);
  const numberArray = number.toString().split('');

  return { number, numberArray };
};

module.exports = {
  generateRandomNumber,
};
