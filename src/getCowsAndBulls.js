'use strict';

function getCowsAndBulls(answer, targetValue) {
  const hashmap = {};

  for (let i = 0; i < answer.length; i += 1) {
    const currentAnswerChar = answer[i];
    const currentGuessChar = targetValue[i];

    if (currentAnswerChar === currentGuessChar) {
      hashmap[i + 1] = 'bull';
    } else if (targetValue.includes(currentAnswerChar)) {
      hashmap[i + 1] = 'cow';
    }
  }

  return hashmap;
}

module.exports = {
  getCowsAndBulls,
};
