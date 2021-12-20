'use strict';

const bullsAndCowsCheck = (computerInput, userInput) => {
  let bullCount = 0;
  let cowCount = 0;

  for (let i = 0; i < computerInput.length; i++) {
    if (computerInput[i] === userInput[i]) {
      bullCount++;
    }

    if (computerInput.includes(userInput[i])
      && computerInput[i] !== userInput[i]) {
      cowCount++;
    }
  }

  return {
    bullCount,
    cowCount,
  };
};

module.exports = { bullsAndCowsCheck };
