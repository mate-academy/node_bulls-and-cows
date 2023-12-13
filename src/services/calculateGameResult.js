'use strict';

function calculateGameResult(randomNumbers, playerInput) {
  if (playerInput.every((_, i) => +playerInput[i] === randomNumbers[i])) {
    return;
  }

  const result = [];

  playerInput.forEach((item, i) => {
    switch (true) {
      case (+playerInput[i] === randomNumbers[i]):
        result.push('bull');
        break;
      case (randomNumbers.includes(+item)):
        result.push('cow');
        break;
      default:
        result.push('__');
    }
  });

  return result;
}

module.exports.calculateGameResult = calculateGameResult;
