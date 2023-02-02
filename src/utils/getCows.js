'use strict';

function getCows(gameDigits, userDigits) {
  let bullCounter = 0;

  for (let i = 0; i < gameDigits.length; i++) {
    const currentUserDigit = userDigits[i];
    const indexOfFound = gameDigits.indexOf(currentUserDigit);

    if (indexOfFound >= 0 && indexOfFound !== i) {
      bullCounter++;
    }
  }

  return bullCounter;
}

module.exports = {
  getCows,
};
