'use strict';

const checkResult = (answer, randomArray) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === randomArray[i]) {
      bulls++;
    } else if (randomArray.includes(answer[i])) {
      cows++;
    }
  }

  return `${bulls} Bulls ${cows} Cows`;
};

module.exports = {
  checkResult,
};
