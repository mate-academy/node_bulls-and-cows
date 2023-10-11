'use strict';

function bullAndCowCounter(arrayOfRandomNumbers, arrayOfUserNumbers) {
  let bull = 0;
  let cow = 0;

  for (let i = 0; i < arrayOfUserNumbers.length; i++) {
    const numberPosition  = arrayOfRandomNumbers.indexOf(arrayOfUserNumbers[i]);

    if (numberPosition !== -1) {
      if (numberPosition === i) {
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
