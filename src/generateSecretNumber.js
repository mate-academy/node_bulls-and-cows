'use strict';

function generateSecretNumber(initial) {
  let guessNumber = initial;
  let count = 0;

  const generateNumber = () => {
    let isNewNumberNotFind = true;

    do {
      const newNumber = Math.round(9 * Math.random());

      if (!guessNumber.includes(newNumber)) {
        guessNumber += newNumber;
        isNewNumberNotFind = false;
      }
    } while (isNewNumberNotFind)

    count++;

    if (count === 4) {
      return guessNumber;
    }

    return generateNumber;
  };

  return generateNumber;
};

module.exports = { generateSecretNumber };
