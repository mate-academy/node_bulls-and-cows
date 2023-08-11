'use strict';

const { targetNumber } = require('./targetNumber');
const { terminal, askToGuess } = require('./terminal');
const { checkBullsAndCows } = require('./checkNumber');

async function startGame() {
  const userNumber = await askToGuess();

  if (userNumber.length !== 4) {
    terminal.write('\nNumber should contain 4 digits!\n');
    startGame();
  } else if (userNumber === targetNumber) {
    terminal.write('\nYou guessed the number! Congratulations!\n');

    terminal.close();
  } else {
    const [bulls, cows] = checkBullsAndCows(targetNumber, userNumber);

    terminal.write(
      `\nNumber of bulls - ${bulls}, number of cows - ${cows} ${targetNumber}\n`
    );

    startGame();
  }
}

startGame();
