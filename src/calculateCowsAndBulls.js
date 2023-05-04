'use strict';

function calculateCowsAndBulls(generatedNumber, numberFromUser) {
  if (!parseInt(numberFromUser)) {
    throw new Error('Wrong number');
  }

  if (numberFromUser.length !== 4) {
    throw new Error('Wrong number');
  }

  function hasRepeated(numberInput) {
    const digitsSet = new Set();

    for (let i = 0; i < numberInput.length; i++) {
      digitsSet.add(numberInput[i]);
    }

    if (digitsSet.length < 4) {
      return true;
    }

    return false;
  }

  if (hasRepeated(numberFromUser)) {
    throw new Error('Wrong number');
  }

  let resultString = '';

  for (let i = 0; i < numberFromUser.length; i++) {
    if (Number(numberFromUser[i]) === Number(generatedNumber[i])) {
      resultString += 'bull ';
    } else if (generatedNumber.indexOf(numberFromUser[i]) >= 0) {
      resultString += 'cow ';
    } else {
      resultString += 'mistake ';
    }
  }

  return resultString;
}

// export { calculateCowsAndBulls };
module.exports = { calculateCowsAndBulls };
