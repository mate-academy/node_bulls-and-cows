'use strict';

const { generatorOfNumber } = require('./generatorOfNumber');

const numberGuessedByComputer = generatorOfNumber();

const countBullsAndCows = ({ userNumber }) => {
  const arrayFromComputerNumber = String(numberGuessedByComputer)
    .padEnd(4, '0').split('');
  const arrayFromUserNumber = userNumber.split('');

  let countOfBulls = 0;
  let countOfCows = 0;
  const countOfCowsUser = [...arrayFromUserNumber];
  const arrayForCowsComputer = [...arrayFromComputerNumber];

  arrayFromComputerNumber.forEach((item, index) => {
    const numberOfUser = arrayFromUserNumber[index];

    if (numberOfUser === item) {
      countOfBulls += 1;

      const index2 = countOfCowsUser.findIndex(number => number === item);
      const index3 = arrayForCowsComputer.findIndex(number => number === item);

      countOfCowsUser.splice(index2, 1);
      arrayForCowsComputer.splice(index3, 1);
    }
  });

  if (countOfCowsUser.length) {
    countOfCowsUser.forEach(item => {
      const isIncludes = arrayForCowsComputer.includes(item);

      if (isIncludes) {
        countOfCows += 1;
      }
    });
  }

  return {
    isCorrect: countOfBulls === 4,
    countOfBulls,
    countOfCows,
  };
};

module.exports = { countBullsAndCows };
