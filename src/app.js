const isNumberValid = require('./modules/isNumberValid');
const getRandomNumber = require('./modules/getRandomNumber');
const askForNumber = require('./modules/askForNumber');

let numberToGues = 0;

while (!isNumberValid(numberToGues)) {
  numberToGues = getRandomNumber();
}

askForNumber('Input 4 different digits, please\n', numberToGues.toString());
