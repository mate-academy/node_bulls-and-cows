'use strict';

const { userInput } = require('./userInput');
const { random } = require('./randomNumberFunction');
const { bullsAndCows } = require('./bullsAndCowsFunction');

const randomNumber = random();

while (true) {
  const userNumber = userInput();
  const result = bullsAndCows(userNumber, randomNumber);

  // eslint-disable-next-line no-console
  console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

  if (randomNumber === userNumber) {
    // eslint-disable-next-line no-console
    console.log('Win!');
    break;
  }
}
