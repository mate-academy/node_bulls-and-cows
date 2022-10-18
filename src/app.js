/* eslint-disable no-console */
'use strict';

const { randomNumber } = require('./randomNumber');
const readline = require('readline');
const { countBullCow } = require('./countBullCow');

const play = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const task = randomNumber();
let result = [];
let count = 10;

const letsGo = function() {
  play.question('Lets try to guess 4 numbers = ', (userVersion) => {
    let error = false;

    if (userVersion.length !== 4) {
      console.log('ERROR!!Please enter exactly 4 numbers. Not more or less');
      error = true;
    }

    if (userVersion.split('').some(el => isNaN(Number(el)))) {
      console.log('ERROR!!Only numbers. Not letters or symbols');
      error = true;
    }

    const repeat = userVersion.split('')
      .filter((num, ind) => userVersion.indexOf(num) !== ind);

    if (repeat.length > 0) {
      console.log('ERROR!!Numbers must not be repeated');
      error = true;
    }

    if (error) {
      letsGo();
    } else {
      count--;

      if (count <= 0) {
        play.close();

        console.log('Game over');

        return 'Game over';
      }
      result = countBullCow(task, userVersion);

      if (result.every(el => el === 'bull')) {
        console.log('You are win!!!');
        play.close();
      } else {
        console.log(`Try again.. ${count} attempts left `);
        result = [];
        letsGo();
      }
    }
  });
};

letsGo();
