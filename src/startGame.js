'use strict';

const { getBullsAndCowsCombination } = require('./getBullsAndCowsCombination');
const { askForGuess } = require('./askForGuess');
const { validateUserInput, normalizeUserInput } = require('./userInput');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const startGame = async() => {
  const winCombination = getBullsAndCowsCombination();

  let triesCount = 0;

  while (true) {
    triesCount += 1;

    const userInput = await askForGuess();

    const isValid = validateUserInput(userInput);

    if (isValid) {
      const userCombination = normalizeUserInput(userInput);

      const { bulls, cows } = calculateBullsAndCows(
        userCombination,
        winCombination,
      );

      // eslint-disable-next-line no-console
      console.log(`Bulls 🐂: ${bulls}; Cows 🐄: ${cows}`);

      if (bulls === 4) {
        // eslint-disable-next-line no-console
        console.log(`
          Congratulations! You've won! :)
          Number of tries: ${triesCount}
        `);
        break;
      }
    }
  }
};

module.exports = {
  startGame,
};
