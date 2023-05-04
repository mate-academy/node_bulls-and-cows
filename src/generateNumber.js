'use strict';

function generateNumber() {
  let newNumberAsString = '';

  const firstDigit = Math.round(Math.random() * 8) + 1;

  newNumberAsString += firstDigit;

  let secondDigit = 0;
  let thirdDigit = 0;
  let fourthDigit = 0;

  do {
    secondDigit = Math.round(Math.random() * 9);
  } while (newNumberAsString.includes(secondDigit.toString()));

  newNumberAsString += secondDigit;

  do {
    thirdDigit = Math.round(Math.random() * 9);
  } while (newNumberAsString.includes(thirdDigit.toString()));

  newNumberAsString += thirdDigit;

  do {
    fourthDigit = Math.round(Math.random() * 9);
  } while (newNumberAsString.includes(fourthDigit.toString()));

  newNumberAsString += fourthDigit;

  return newNumberAsString;
}

// export { generateNumber };

module.exports = { generateNumber };
