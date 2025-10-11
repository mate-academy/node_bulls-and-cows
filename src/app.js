'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const { writeMessage, askQuestion, closeIO } = require('./modules/io');

const secretNumber = generateRandomNumber();

writeMessage('Welcome to Bulls and Cows!');
writeMessage('I have generated a random 4-digit number for you to guess.\n');
writeMessage('Each digit is unique.\n');
writeMessage('Try to guess the number!\n');

const gameLoop = async () => {
  let trimmedInput = '';
  let isValid = false;

  while (!isValid) {
    const userInput = await askQuestion(
      'Your guess (4 unique digits, no leading zero): ',
    );

    trimmedInput = userInput.trim();
    isValid = checkIsValidUserInput(trimmedInput);

    if (!isValid) {
      writeMessage(
        'Invalid input. Please enter 4 unique digits, without leading zero.\n',
      );
    }
  }

  const { bulls, cows } = getBullsAndCows(trimmedInput, secretNumber);

  writeMessage(`Bulls: ${bulls}, Cows: ${cows}`);

  if (bulls === 4) {
    writeMessage('Congratulations! You guessed the number!');
    closeIO();

    return;
  }

  gameLoop();
};

gameLoop();
