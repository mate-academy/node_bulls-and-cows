/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const text = `I've chosen a number, try to guess it by entering a number with 4 different digits, not starting with 0. `;

terminal.question(text, (userInput) => {
  terminal.close();

  if (!checkIsValidUserInput(userInput)) {
    throw new Error('Only 4 different digits, not starting with 0');
  }

  const numberToGuess = generateRandomNumber();
  const { bulls, cows } = getBullsAndCows(+userInput, numberToGuess);

  console.log('=============');
  console.log('Anddddddd');
  console.log(`The number I've chosen is: ${numberToGuess}`);
  console.log('=============');

  if (bulls === 4) {
    console.log('Wow, what a coincidence, impressive! 😲');
  } else if (!bulls && !cows) {
    console.log('Better luck next time');
  } else if (bulls > 0 && cows > 0) {
    console.log(
      'Your result: ' +
        `${bulls > 1 ? `${bulls} bulls` : 'one bull'}` +
        `${cows > 1 ? ` and ${cows} cows` : ' and one cow'}`,
    );
  } else if (bulls > 0) {
    console.log(`Your result: ${bulls > 1 ? `${bulls} bulls` : 'one bull'}`);
  } else {
    console.log(`Your result: ${cows > 1 ? `${cows} cows` : 'one cow'}`);
  }
});
