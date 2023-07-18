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

  onGameStart(numberOfDigits, validateAnswer) {
    console.clear();

    this.postQuestion(
      `Try to guess ${numberOfDigits} numbers: `,
      validateAnswer
    );
  }

  winGame(newGame) {
    this.terminal.question(
      'Awsome! You find all bulls! Wont you try again?: yes/no: ',
      (answer) => {
        switch (answer) {
          case 'yes':
            newGame();
            break;
          case 'no':
            this.startGame(newGame);
            break;
          default:
            console.info('Invalid input! Please enter either "yes" or "no".');
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

  onGameContinue(bulls, cows, validateAnswer) {
    this.terminal.question(
      `Bulls: ${bulls}, Cows: ${cows}, try again`,
      validateAnswer
    );
  }
}

module.exports = GameControl;
