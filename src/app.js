'use strict';

const readline = require('node:readline').promises;
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

// Write your code here
async function playBullsAndCows() {
  const randomNumber = generateRandomNumber();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  await rl.question(`Welcome to Bulls and Cows!\nI have generated a random 4-digit number. 
    Can you guess it?\nPress Enter to start...`);

  let isGameOver = false;

  while (!isGameOver) {
    const userGuess = await rl.question('Enter your guess: ');

    if (!checkIsValidUserInput(userGuess)) {
      await rl.question('Invalid input! Press Enter to try again');
      continue;
    }

    const { bulls, cows } = getBullsAndCows(Number(userGuess), randomNumber);

    if (bulls === 4) {
      await rl.question('Congratulation! You have won! Press Enter to exit...');
      isGameOver = true;
    } else {
      await rl.question(
        `${bulls} Bulls and ${cows} Cows. Press Enter to try again...`,
      );
    }
  }
  rl.close();
}

playBullsAndCows();
