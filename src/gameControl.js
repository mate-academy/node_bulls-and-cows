/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class GameControl {
  constructor() {
    this.terminal = terminal;
  }

  postQuestion(massage, callback) {
    this.terminal.question(massage, callback);
  }

  onGameStart(numberOfDigits, checkAnswer) {
    this.postQuestion(
      `Try to guess ${numberOfDigits} numbers: `,
      checkAnswer
    );
  }

  winGame(newGame) {
    this.terminal.question(
      'Awesome! You found all bulls! Do you want to try again?: yes/no: ',
      (answer) => {
        switch (answer) {
          case 'yes':
            newGame();
            break;
          case 'no':
            this.startGame(newGame);
            break;
          default:
            console.info('Invalid input! Please enter either "yes" or "no". ');
            this.startGame(newGame);
            break;
        }
      }
    );
  }

  startGame(start) {
    this.terminal.question('Enter "start" to begin the game: ', (answer) => {
      if (answer === 'start') {
        start();
      } else {
        this.startGame(start);
      }
    });
  }

  onGameContinue(bulls, cows, checkAnswer) {
    this.terminal.question(
      `Bulls: ${bulls}, Cows: ${cows}, try again: `,
      checkAnswer
    );
  }
}

module.exports = GameControl;
