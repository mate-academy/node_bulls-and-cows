'use strict';

const messages = () => {
  const introMessage = `Let's play Bulls&Cows.\n
You have to guess a 4-digit number.
Digits are in the range from 0 to 9. First digit cannot be 0.\n
If you guess a digit on its place - BULL counter will grow up,
if you guess digit exists in the number,
but the place is wrong - COW counter will grow up.\n
There are 10 attempts to guess.\n
Are you ready to play?
Please enter 'yes' or 'no'\n`;

  const congratsMessage = 'Congratulations! You guessed the number';

  const gameOverMessage = `Sorry, you have exceeded the maximum attempts.
The number was`;

  const firstDigitError = `The number cannot starts with zero\n`;

  const numberError = `Error: Please enter a 4-digit number\n`;

  const uniqueError = `Error: Please enter only unique digits\n`;

  return [
    introMessage,
    congratsMessage,
    gameOverMessage,
    firstDigitError,
    numberError,
    uniqueError,
  ];
};

module.exports = { messages };
