'use strict';

function bullAndCowCounter(arrayOfRandomNumbers, arrayOfUserNumbers) {
  let bull = 0;
  let cow = 0;

  for (let i = 0; i < arrayOfUserNumbers.length; i++) {
    if (arrayOfRandomNumbers.includes(arrayOfUserNumbers[i])) {
      if (arrayOfRandomNumbers.indexOf(arrayOfUserNumbers[i]) === i) {
        bull++;
      } else {
        cow++;
      }
    }
  }

  return {
    bull,
    cow,
  };
}

module.exports = { bullAndCowCounter };
