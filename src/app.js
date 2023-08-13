'use strict';

const { generateNumber } = require('./generateNumber');
const { terminal, askToGuess } = require('./terminal');
const {
  checkBullsAndCows,
  isNumberHasDuplicates,
} = require('./checkNumber');

const targetNumber = generateNumber();

async function startGame() {
  const userNumber = await askToGuess();

  if (userNumber.length !== 4) {
    terminal.write('\nNumber should contain 4 digits!\n');
    startGame();
  } else if (isNumberHasDuplicates(userNumber)) {
    terminal.write('\nAll digits must be different!\n');
    startGame();
  } else if (userNumber === targetNumber) {
    terminal.write('\nYou guessed the number! Congratulations!\n');

    terminal.close();
  } else {
    const [bulls, cows] = checkBullsAndCows(targetNumber, userNumber);

    terminal.write(
      `\nNumber of bulls - ${bulls}, number of cows - ${cows}\n`
    );

    startGame();
  }
}

startGame();
