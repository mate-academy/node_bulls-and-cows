'use strict';

const gameCalculations = (generatedNumber, number) => {
  const generatedNumberArr = generatedNumber.split('');
  const numberArr = number.split('');
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < generatedNumberArr.length; i++) {
    if (generatedNumberArr[i] === numberArr[i]) {
      bulls++;
    } else if (generatedNumberArr.includes(numberArr[i])) {
      cows++;
    }
  }

  return `Bulls: ${bulls}, Cows: ${cows}`;
};

module.exports = gameCalculations;
