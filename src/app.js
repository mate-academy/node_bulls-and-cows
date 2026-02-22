const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { prompt } = require('./modules/io');

const numberToGuess = generateRandomNumber();

prompt(numberToGuess);
