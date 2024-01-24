/* eslint-disable no-console */
'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const generalQuestion = 'You can try to guess, what is your digit?  ';
const numberLength = 4;

function getAnswerToQuestion(question) {
  const terminal = require('node:readline').createInterface(
    process.stdin,
    process.stdout,
  );

  return new Promise((resolve) => {
    terminal.question(question, (answer) => {
      terminal.close();
      resolve(answer);
    });
  });
}

function getStringQuantityAnimal(animals, quantity) {
  const correctName = quantity > 1
    ? animals
    : animals.slice(0, animals.length - 1);

  return quantity + ' ' + correctName;
}

async function gameProcess() {
  const computerNumber = generateRandomNumber();
  let answer = '';

  while (computerNumber !== +answer) {
    const userInput = await getAnswerToQuestion(generalQuestion);

    answer = userInput;

    if (checkIsValidUserInput(userInput)) {
      const resultBullsAndCows = getBullsAndCows(userInput, computerNumber);
      const bullsNum = resultBullsAndCows.bulls;

      if (bullsNum === numberLength) {
        console.log('You have just guessed!!! \n');
      } else {
        const stringWithQuantityAnimals = Object
          .entries(resultBullsAndCows)
          .map(pair => getStringQuantityAnimal(...pair))
          .join(' and ');

        console.log(`You have just had ${stringWithQuantityAnimals}! \n`);
      }
    } else {
      console.log('Your input is not valid \n');
    }
  }
};

gameProcess();
