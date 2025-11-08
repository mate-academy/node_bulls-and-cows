'use strict';

// Write your code here
const readline = require('readline');
const generateRandomNumber = require('./modules/generateRandomNumber');
const getBullsAndCows = require('./modules/getBullsAndCows');
const checksValidUserInput = require('./modules/checksValidUserInput');

class BullsAndCowsGame {
  constructor() {
    this.secretNumber = generateRandomNumber();
    this.attempts = 0;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  async start() {
    this.printWelcome();
    await this.playGame();
  }

  async playGame() {
    return new Promise((resolve) => {
      this.askForGuess(resolve);
    });
  }

  askForGuess(resolve) {
    this.rl.question('💭 Digite sua tentativa (4 dígitos): ', (guess) => {
      this.processGuess(guess, resolve);
    });
  }

  processGuess(guess, resolve) {
    const validation = checksValidUserInput(guess);

    if (!validation.valid) {
      // eslint-disable-next-line no-console
      console.log(`❌ Erro: ${validation.error}\n`);

      return this.askForGuess(resolve);
    }

    const result = getBullsAndCows(this.secretNumber, guess);

    this.printResult(guess, result.bulls, result.cows);

    if (result.bulls === 4) {
      this.printVictory();
      this.rl.close();
      resolve();
    } else {
      this.askForGuess(resolve);
    }
  }
}

// Executar o jogo
if (require.main === module) {
  const game = new BullsAndCowsGame();

  // eslint-disable-next-line no-console
  game.start().catch(console.error);
}

module.exports = BullsAndCowsGame;
