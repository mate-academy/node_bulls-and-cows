'use strict';

const GameControl = require('./gameControl.js');
const { getRandomDigits } = require('./helper.js');

const NUMBER_OF_DIGITS = 4;

class Game {
  constructor() {
    this.digits = [];
    this.controller = new GameControl();
  }

  initGame() {
    this.digits = getRandomDigits(NUMBER_OF_DIGITS);

    this.controller.onGameStart(
      NUMBER_OF_DIGITS,
      this.checkAnswer.bind(this)
    );
  }

  checkAnswer(answer) {
    const normalizeAnswer = answer.split('').map(Number);

    const bulls = this.digits.filter(
      (item, index) => item === normalizeAnswer[index]
    ).length;

    const cows = this.digits.filter(
      (item, index) => (
        normalizeAnswer[index] !== item && normalizeAnswer.includes(item)
      )
    ).length;

    switch (bulls) {
      case NUMBER_OF_DIGITS:
        this.controller.winGame(this.initGame.bind(this));
        break;
      default:
        this.controller.onGameContinue(
          bulls,
          cows,
          this.checkAnswer.bind(this)
        );
        break;
    }
  }
}

const game = new Game(4);

game.initGame();
