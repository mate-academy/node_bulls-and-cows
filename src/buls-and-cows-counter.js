'use strict';

function countBullAndCows(guessNumb, generatedNumb) {
  const strFromGeneratedNumb = generatedNumb.toString();
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < guessNumb.length; i++) {
    if (strFromGeneratedNumb.includes(guessNumb[i])) {
      if (strFromGeneratedNumb[i] === guessNumb[i]) {
        result.bulls++;
      } else {
        result.cows++;
      }
    }
  }

  return result;
}

module.exports = { countBullAndCows };
