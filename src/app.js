'use strict';

const readline = require('node:readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Type any number ', (userInput) => {
  const randomNumber = generateRandomNumber();

  if (checkIsValidUserInput(userInput)) {
    const { bulls, cows } = getBullsAndCows(userInput, randomNumber);
    const isManyBools = bulls > 1 ? 'bools' : 'bool';
    const isManyCows = cows > 1 ? 'cows' : 'cow';

    /* eslint-disable no-console */
    console.log(
      `${bulls} ${isManyBools} and ${cows} ${isManyCows} guessed! Right answer is ${randomNumber}`,
    );
  }

  if (!checkIsValidUserInput(userInput)) {
    /* eslint-disable no-console */
    console.log('You inserted an invalid value!');
  }
  rl.close();
});
