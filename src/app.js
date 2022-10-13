/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const play = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const task = [];

while (task.length < 4) {
  const random = Math.floor(Math.random() * 10);

  if (!task.includes(random)) {
    task.push(random);
  }
}

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

      for (let i = 0; i < 4; i++) {
        if (task[i] === Number(userVersion[i])) {
          result.push('bull');
          continue;
        }

        if (task.includes(Number(userVersion[i]))) {
          result.push('cow');
          continue;
        }
        result.push('?');
      }

      console.log(result);

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
