'use strict';

const readline = require('readline');

const { countPoints } = require('./countPoints');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playAgain(text = 'Do you want to play more?(yes/no):') {
  terminal.question(text, (userInput) => {
    switch (userInput) {
      case 'yes':
        playBullsAndCows();
        break;
      case 'no':
        terminal.close();
        break;
      default:
        playAgain('Enter yes or no:');
        break;
    }
  });
}

function playBullsAndCows() {
  terminal.question('Your Number:', (userInput) => {
    const regex = /^\d{4}$/;

    if (!regex.test(userInput)) {
      console.log('Number must have 4 digits');
      playBullsAndCows();
    } else {
      const [bull, cow, isWiner] = countPoints(userInput);

      if (isWiner) {
        console.log('YOU ARE WINNER!!!');
        playAgain();
      } else {
        console.log('Bull:', bull, 'Cow:', cow);
        playBullsAndCows();
      }
    }
  });
}

playBullsAndCows();
