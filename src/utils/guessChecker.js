'use strict';

const guessChecker = (numbersToGuess, userInput) => {
  const userNumbers = String(userInput).split('');
  const result = {
    bull: 0,
    cow: 0,
    childrenMade: [],
  };

  userNumbers.forEach((num, index) => {
    if (numbersToGuess.includes(num)) {
      if (numbersToGuess.indexOf(num) === index) {
        result.bull++;
        result.childrenMade.push('BULL');
      } else {
        result.cow++;
        result.childrenMade.push('COW');
      }
    } else {
      result.childrenMade.push('wolf');
    }
  });

  return result;
};

module.exports = {
  guessChecker,
};
