'use strict';

const {
  printWelcomeMessage,
  printNumsWasGenerate,
  enterNumberOfDigits,
  enterGuess,
} = require('./input-output');
const { generateRandomNums } = require('./nums-generator');

printWelcomeMessage();

async function main() {
  try {
    const digitsInNumber = await enterNumberOfDigits();
    const generatedNumbers = generateRandomNums(digitsInNumber);

    printNumsWasGenerate(generatedNumbers.length);
    enterGuess(generatedNumbers, 'Enter your guess: ');
  } catch (error) {
    console.log(error);
    main();
  }
};

main();
