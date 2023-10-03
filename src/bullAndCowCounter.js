'use strict';

function bullAndCowCounter(arrayOfRandomNumbers, arrayOfUserNumbers) {
  let bull = 0;
  let cow = 0;

  for (let i = 0; i < arrayOfUserNumbers.length; i++) {
    if (arrayOfRandomNumbers.includes(arrayOfUserNumbers[i])) {
      cow++;
    }

    if (arrayOfRandomNumbers.indexOf(arrayOfUserNumbers[i]) === i) {
      cow--;
      bull++;
    }
  }

  return {
    bull,
    cow,
  };
}

module.exports = { bullAndCowCounter };
