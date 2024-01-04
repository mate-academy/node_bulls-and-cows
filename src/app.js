/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const randomizerOfUniqueDigits = () => {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    result += digits[randomIndex];
    digits.splice(randomIndex, 1);
  }

  return +result;
};

const randomNumber = randomizerOfUniqueDigits();

const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

function checkForCows(str) {
  const res = str.split('').map(num => [...String(randomNumber)]
    .includes(num) ? { [num]: 'present' } : { [num]: 'not present' });

  console.log('Cows: \n', res);
}

function checkForBulls(str) {
  const res = str.split('').map((num, ind) => String(randomNumber)[ind] === num
    ? { [num]: 'is on its place' } : { [num]: 'not in place' });

  console.log('Bulls: \n', res);
}

function bullsAndCowsGame() {
  terminal.question('Write a number of 4 different digits \n', (num) => {
    console.clear();

    if (num.length !== 4 || isNaN(+num)) {
      console.log('Number should have 4 digits and shoud be a number');
      bullsAndCowsGame();
    } else {
      if (+num === randomNumber) {
        console.log('YOU WIN! CONGRATS!!!');
        terminal.close();

        return;
      }
      checkForCows(num);
      checkForBulls(num);

      bullsAndCowsGame();
    }
  });
}

bullsAndCowsGame();
