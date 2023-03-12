'use strict';

const getBullAndCows = (input, generated) => {
  const convertToArr = Array.from(input);
  const copyGenerated = [...generated];
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < convertToArr.length; i++) {
    if (convertToArr[i] === copyGenerated[i]) {
      bulls++;
      copyGenerated[i] = null;
      continue;
    }

    if (copyGenerated.includes(convertToArr[i])) {
      cows++;
    }
  }

  const bullAndCows = {
    bulls,
    cows,
  };

  return bullAndCows;
};

module.exports = {
  getBullAndCows,
};
