'use strict';

const { userNumber } = require('./userInput');
const { randomNumber } = require('./randomNumberFunction');
const { bullsAndCows } = require('./bullsAndCowsFunction');

const result = bullsAndCows(userNumber, randomNumber);

// eslint-disable-next-line no-console
console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
