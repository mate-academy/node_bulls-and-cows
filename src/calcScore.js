'use strict';

const calcScore = (number, userInput) => {
  const score = {
    bull: 0,
    cows: 0,
  };

  for (let i = 0; i < number.length; i++) {
    if (number[i] === userInput[i]) {
      score.bull += 1;
      continue;
    }

    if (userInput.includes(number[i])) {
      score.cows += 1;
    }
  }

  return `Result: ${score.bull} bull, ${score.cows} cows -> `;
};

module.exports = { calcScore };
