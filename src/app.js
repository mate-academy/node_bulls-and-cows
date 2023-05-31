/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { countBullAndCow } = require('./countBullAndCow');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playBullsAndCows() {
  r1.question('Your Number:', (userInput) => {
    const regex = /^\d{4}$/;

    if (!regex.test(userInput)) {
      console.log('Number must have 4 digits');
      playBullsAndCows();
    } else {
      const [ bull, cow, isWiner ] = countBullAndCow(userInput);

      if (isWiner) {
        console.log('YOU ARE WINNER!!!');
        r1.close();
      } else {
        console.log('Bull:', bull, 'Cow:', cow);
        playBullsAndCows();
      }
    }
  });
}

playBullsAndCows();
