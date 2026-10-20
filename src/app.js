'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { getUserInput, showMessage, closeInput } = require('./modules/io');

function playGame() {
  const numberToGuess = generateRandomNumber();

  function askUser() {
    getUserInput('Enter a 4-digit number: ', (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        showMessage(
          'Invalid input. Enter 4 different digits without starting with 0.',
        );

        askUser();

        return;
      }

      const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

      showMessage(`Bulls: ${bulls}, Cows: ${cows}`);

      if (bulls === 4) {
        showMessage('Congratulations! You guessed the number!');
        closeInput();

        return;
      }

      askUser();
    });
  }

  askUser();
}

playGame();
