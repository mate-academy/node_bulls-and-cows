/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumbers = Math.round(Math.random() * 10000).toString();

let str = '';

const randomCopy = randomNumbers.split('');

userInterface.question('Write 4 digits ', (number) => {
  const formatNumber = number.toString();

  if (formatNumber.length !== 4) {
    throw Error('You writed not 4 digits');
  }

  for (let i = 0; i < formatNumber.length; i++) {
    if (formatNumber[i] === randomNumbers[i]) {
      str += 'bull ';

      continue;
    }

    const isExist = randomCopy.find(num => num === formatNumber[i]);

    if (isExist) {
      str += 'cows ';

      continue;
    }
  }

  console.log('Random numbers: ' + randomNumbers);

  console.log(str);

  userInterface.close();
});
