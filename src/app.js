'use strict';

const { generateRandomNumber } = require('./generating');
const { getPersonNum, showResult, showGameEnd } = require('./operation');
const { calculateBullsAndCows, isGuessValid } = require('./calculating');

function playGame() {
  const compNumber = generateRandomNumber();

  function makeGuess() {
    getPersonNum((personNum) => {
      if (!isGuessValid(personNum)) {
        // eslint-disable-next-line no-console
        console.log('Please enter 4 different digits.');
        makeGuess();

        return;
      }

      const result = calculateBullsAndCows(compNumber, personNum);

      showResult(result.bulls, result.cows);

      if (compNumber === personNum) {
        showGameEnd();
      } else {
        makeGuess();
      }
    });
  }

  makeGuess();
}

playGame();
