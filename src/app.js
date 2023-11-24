'use strict';

const readline = require('readline');
const startGame = require('./gameLogic');
const getRandomNumber = require('./numberGenerator');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = getRandomNumber();
const startGameText = `Let's play the game.
I will think of a four-digit number composed of unique digits,
and you need to guess it.
If the digit and its position match, it's a "bull."
If the digit matches but the position doesn't, it's a "cow."
The game will end when the number is guessed.
Enter the number:\n`;

function game(machineNumber, text) {
  terminal.question(text, (number) => {
    const result = startGame(number, machineNumber);

    if (!result) {
      game(machineNumber, 'Try again! ');
    } else {
      if (result.bull === 4) {
        // eslint-disable-next-line no-console
        console.log(`Congratulations, you won!`);

        terminal.close();
      } else {
        const answer = 'The result is '
        + `${result.bull} ${result.bull > 1 ? 'bulls' : 'bull'}`
        + ' and '
        + `${result.cow} ${result.cow > 1 ? 'cows' : 'cow'}`
        + ' Try again! ';

        game(machineNumber, answer);
      }
    }
  });
}

game(randomNumber, startGameText);
