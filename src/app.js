/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

function askQuestion(rl, prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => resolve(answer));
  });
}

async function play() {
  const secret = generateRandomNumber();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let answer = '';

  while (true) {
    do {
      answer = await askQuestion(rl, 'Enter your 4 digits: ');

      if (!checkIsValidUserInput(answer)) {
        console.log('Enter a 4-digit with unique digits, first is not zero!');
      }
    } while (!checkIsValidUserInput(answer));

    const result = getBullsAndCows(answer, secret);

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log(`🎉 Congratulations! You guessed the number: ${secret}`);
      rl.close();
      break;
    }
  }
}

play();
