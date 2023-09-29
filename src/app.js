'use strict';
/* eslint-disable */
const prompt = require('prompt-sync')();

function generateDigits() {
  const digits = [];

  for (let i = 0; i < 4; i++) {
    const randomDigit = Math.floor(Math.random() * 10);

    digits.push(randomDigit);
  }

  return digits;
}

function checkForBull() {
  for (let i = 0; i < randomDigits.length; i++) {
    if (randomDigits[i] === inputArray[i]) {
      found = true;

      return;
    }

    if (randomDigits.includes(inputArray[i])) {
      console.log('Cow');
    }
  }
  console.log('Try again!');
}

const randomDigits = generateDigits();

let input;
let inputArray;

let found = false;

do {
  input = prompt('Enter a 4 digit code: ');

  inputArray = input.split('').map(pos => {
    pos = parseInt(pos);
  });

  checkForBull();
} while (inputArray.length !== 4 || !found);

console.log('Bull! You won!');

/* eslint-enable */
