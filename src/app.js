/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { randomNumber } = require('./randomNumber');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str = '';

const result = randomNumber();

terminal.question('Write 4 digits ', (number) => {
  const userNumber = number.toString();

  if (userNumber.length !== 4) {
    console.log('You writed not 4 digits');

    terminal.close();
  }

  if ([...new Set(userNumber)].length !== userNumber.length) {
    console.log('You need to write 4 different digits!');

    terminal.close();
  }

  for (let i = 0; i < userNumber.length; i++) {
    if (userNumber[i] === result[i]) {
      str += `${userNumber[i]} - bull, `;

      continue;
    }

    const isExist = result.split('').find(num => num === userNumber[i]);

    if (isExist) {
      str += `${userNumber[i]} - cows, `;

      continue;
    } else {
      str += 'nothing, ';
    }
  }

  console.log('Random numbers: ' + result);

  console.log(str);

  terminal.close();
});
