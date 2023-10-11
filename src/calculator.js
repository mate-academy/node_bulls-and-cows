'use strict';

const calculator = (generatedNums, userInput) => {
  const bulls = [];
  const cows = [];

  if (+userInput === +(generatedNums.join(''))) {
    return {
      bulls: generatedNums,
      cows,
    };
  }

  const userNums = userInput.split('');

  for (let i = 0; i < generatedNums.length; i++) {
    if (generatedNums[i] === +userNums[i]) {
      bulls.push(generatedNums[i]);
    }

    if (generatedNums.includes(+userNums[i])
      && !bulls.includes(+userNums[i])) {
      cows.push(+userNums[i]);
    }
  }

  return {
    bulls,
    cows,
  };
};

module.exports = {
  calculator,
};
