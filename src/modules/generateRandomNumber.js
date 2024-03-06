'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

const { invalidFirstDigit } = require('./checkIsValidUserInput');
const range = [1000, 9000];

function generateRandomNumber() {
  let randomNum = getRandomNumber();
  let randomNumArr = formatToArray(randomNum);

  while (new Set(randomNumArr).size !== randomNumArr.length) {
    randomNum = getRandomNumber();
    randomNumArr = formatToArray(randomNum);
  }

  while (randomNumArr[0] === invalidFirstDigit) {
    randomNum = getRandomNumber();
    randomNumArr = formatToArray(randomNum);
  }

  return randomNum;
}

function getRandomNumber() {
  return Math.floor(range[0] + Math.random() * range[1]);
}

function formatToArray(num) {
  return num.toString().split('');
}

module.exports = { generateRandomNumber };
