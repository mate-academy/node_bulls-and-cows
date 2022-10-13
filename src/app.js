'use strict';

const readline = require('readline');

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumbers = Math.round(Math.random() * 10000).toString();
let str = '';

userInterface.question('Write 4 digits ', (number) => {
  const formatNumber = number.toString();

  if (formatNumber.length !== 4) {
    throw Error('You writed not 4 digits');
  }

  for (let i = 0; i < formatNumber.length; i++) {
    if (number[i] === randomNumbers[i]) {
      str += 'bull ';
    } else {
      str += 'cows ';
    }
  }

  console.log(randomNumbers);

  console.log(str);

  userInterface.close();
});

// function generateRandomNumber() {
//   return Math.round(Math.random() * 10000);
// }

// function calculatingBullsAndCows() {

// }
