'use strict';

const randomDigits = require('./randomNumbers');
const countBullsAndCows = require('./getCountBullAndCows');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

function printResult(result) {
  // eslint-disable-next-line no-console
  console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
};

function printMessage(message) {
  // eslint-disable-next-line no-console
  console.log(message);
};

async function playGame() {
  const numbers = randomDigits();
  let answear;

  if (!answear) {
    printMessage('Welcome to Bulls and Cows game!');
  }

  while (answear !== numbers) {
    answear = await promptUser('Enter a 4-digit number with distinct digits: ');

    if (!/^\d{4}$/.test(answear) && answear) {
      printMessage(
        'Invalid input! Please enter a 4-digit number with distinct digits.'
      );
      continue;
    }

    const result = countBullsAndCows(numbers, answear);

    printResult(result);
  }

  printMessage(`Congratulations! You found the number ${numbers}`);
  rl.close();
};

playGame();
