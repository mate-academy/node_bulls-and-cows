'use strict';

const messages = () => {
  const introMessage = `Let's play Bulls&Cows.\n
You have to guess a 4-digit number.
Digits are in the range from 1 to 4 inclusive.\n
If you guess a digit on its place - BULL counter will grow up,
if you guess digit exists in the number,
but the place is wrong - COW counter will grow up.\n
There are 10 attempts to guess.\n
Are you ready to play?
Please enter 'yes' or 'no'\n`;

  const congratsMessage = 'Congratulations! You guessed the number';

  const gameOverMessage = `Sorry, you have exceeded the maximum attempts.
The number was`;

  const digitsError = `Error: Please enter only digits from 1 to 4\n`;

  const numberError = `Error: Please enter a 4-digit number\n`;

  return [
    introMessage,
    congratsMessage,
    gameOverMessage,
    digitsError,
    numberError,
  ];
};

module.exports.messages = messages;
