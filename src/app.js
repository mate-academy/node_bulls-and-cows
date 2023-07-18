'use strict';

const GameControl = require('./gameControl.js');
const { getArrayOfrandomValues } = require('./helper.js');

const NUMBER_OF_DIGITS = 4;

class Game {
  constructor() {
    this.digits = [];
    this.controller = new GameControl();
  }

  initialGame() {
    this.digits = getArrayOfrandomValues(NUMBER_OF_DIGITS);
    // this.digits = [1, 1, 1, 1];

    this.controller.onGameStart(
      NUMBER_OF_DIGITS,
      this.validateAnswer.bind(this)
    );
  }

  validateAnswer(someValues) {
    const answer = someValues.split('').map(Number);
    const bulls = this.digits.filter(
      (item, index) => item === answer[index]
    ).length;
    const cows = this.digits.filter(
      (item, index) => answer[index] !== item && answer.includes(item)
    ).length;

    switch (bulls) {
      case NUMBER_OF_DIGITS:
        this.controller.winGame(this.initialGame.bind(this));
        break;
      default:
        this.controller.onGameContinue(
          bulls,
          cows,
          this.validateAnswer.bind(this)
        );
        break;
    }
  }
}

const game = new Game(4);

game.initialGame();
