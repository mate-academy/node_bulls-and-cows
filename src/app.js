'use strict';

const { terminal } = require('./terminal');
const { getFourDigitsRandom } = require('./randomNumber');
const {
  isNumber,
  isFourDigitNumber,
  isUniqeNumbers,
} = require('./checkFuncs');
const { countBullsAndCows } = require('./countBullsAndCows');

function startGame() {
  terminal.question('Guess a four-digit number ', (enterNumber) => {
    const checkUnique = isUniqeNumbers(enterNumber);
    const fourDigitRandom = getFourDigitsRandom();

    if (!checkUnique) {
      // eslint-disable-next-line no-console
      console.log('Enter digits must be unique');
      startGame();
      return;
    }
    if (isNumber(+enterNumber) && isFourDigitNumber(+enterNumber)) {
      if (+enterNumber === fourDigitRandom) {
        // eslint-disable-next-line no-console
        console.log('Congratulations, you guessed it!');
        terminal.close();
      } else {
        countBullsAndCows(fourDigitRandom, enterNumber);
        startGame();
      }
    } else {
      // eslint-disable-next-line no-console
      console.log('Please, enter only four-digit number');
      startGame();
    }
  });
}

startGame();
