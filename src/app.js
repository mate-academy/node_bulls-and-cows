'use strict';

import readline from 'readline';
import generateRandomNumber from './modules/generateRandomNumber.js';
import checkIsValidUserInput from './modules/checkIsValidUserInput.js';
import getBullsAndCows from './modules/getBullsAndCows.js';

const terminal = readline.createInterface(process.stdin, process.stdout);

function askQuestion(question) {
  return new Promise((resolve) => {
    terminal.question(question, (answer) => {
      resolve(answer.toLowerCase().trim());
    });
  });
}

async function bullsAndCows() {
  const approval = await askQuestion(`Hello, let's play bulls and cows?\n`);

  if (approval !== 'yes' && approval !== '') {
    terminal.write('What a pity((\n');
    terminal.close();

    return;
  }

  let userNumber = await askQuestion(
    `\nOk, let's start! Enter a number.\nThe number must be 4 characters long, must not start with 0, contain duplicates or letters.\n\n`,
  );

  let resultCheckInput = checkIsValidUserInput(userNumber);

  while (!resultCheckInput) {
    userNumber = await askQuestion(`You entered the wrong number.\n\n`);
    resultCheckInput = checkIsValidUserInput(userNumber);
  }

  const randomNumber = generateRandomNumber();
  let checkBullsAndCows = getBullsAndCows(userNumber, randomNumber);

  while (checkBullsAndCows.bulls !== 4) {
    userNumber = await askQuestion(
      `bulls: ${checkBullsAndCows.bulls}, cows: ${checkBullsAndCows.cows}\nTry again\n\n`,
    );

    resultCheckInput = checkIsValidUserInput(userNumber);

    if (!resultCheckInput) {
      userNumber = await askQuestion(`You entered the wrong number.\n\n`);
      resultCheckInput = checkIsValidUserInput(userNumber);
    }

    checkBullsAndCows = getBullsAndCows(userNumber, randomNumber);
  }

  terminal.write('You win!\n');
  terminal.close();
}

bullsAndCows();
