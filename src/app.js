'use strict';

const { terminal } = require('./terminal');
const { fourDigitRandom } = require('./randomNumber');
const { isNumber, isFourDigitNumber } = require('./checkFuncs');
const { countBullsAndCows } = require('./countBullsAndCows');

function startGame() {
  terminal.question('Guess a four-digit number ', (enterNumber) => {
    if (isNumber(+enterNumber) && isFourDigitNumber(+enterNumber)) {
      if (+enterNumber === fourDigitRandom) {
        console.log('Congratulations, you guessed it!')
        terminal.close();
      } else {
        countBullsAndCows(fourDigitRandom, enterNumber);
        startGame();
      }
    } else {
      console.log('Please, enter only four-digit number');
      startGame();
    }
  })
}

startGame();
