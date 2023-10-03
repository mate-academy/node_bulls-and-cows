/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { generateNumber } = require('./numberGenerator');
const { checkAnswer } = require('./checkAnswer');
const searchedNumber = generateNumber();

function gameStart() {
  terminal.question('Enter a number: ', (userInput) => {
    if (userInput.length !== 4 || !Number(userInput)) {
      console.log('Invalid number, please enter a 4 different digits');
      terminal.question('Enter a number: ', gameStart);

      return;
    }

    if (userInput === searchedNumber) {
      console.log('You won!', `Searched number was: ${searchedNumber}`);
      terminal.close();

      return;
    }

    const [bulls, cows] = checkAnswer(searchedNumber, userInput);

    console.log(`Your score is ${bulls} bulls, ${cows} cows`);
    gameStart();
  });
}

gameStart();
