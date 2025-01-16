/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

play();

function play() {
  const randomNum = generateRandomNumber();

  console.log(randomNum);

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  terminal.question(`Enter your guess (e.g., 1234): `, (userInput) => {
    speakWithUser(userInput, randomNum, terminal);
  });
}

function speakWithUser(userInput, checkNum, terminal) {
  const isValid = checkIsValidUserInput(userInput);

  if (!isValid) {
    terminal.question(
      `Invalid input! Please follow these rules:\n
       ✔ The number must be 4 digits long.\n
       ✔ Each digit must be unique.\n
       ✔ The number cannot start with zero.\n\n
       Try again:`,
      (newUserInput) => {
        speakWithUser(newUserInput, checkNum, terminal);
      },
    );

    return;
  }

  const bullsAndCowsObj = getBullsAndCows(+userInput, checkNum);

  if (bullsAndCowsObj.bulls === 4) {
    console.log('You win!!!');

    terminal.question('Do you want to play again? (yes/no) ', (answer) => {
      if (answer.toLowerCase() === 'yes') {
        terminal.close();
        play();
      } else {
        console.log('Goodbye!');
        terminal.close();
      }
    });

    return;
  }

  terminal.question(
    `${userInput} -> ${bullsAndCowsObj.bulls} bulls and ${bullsAndCowsObj.cows} cows.\nTry other number:`,
    (newUserInput) => {
      speakWithUser(newUserInput, checkNum, terminal);
    },
  );
}
