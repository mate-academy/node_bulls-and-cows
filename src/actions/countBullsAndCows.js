'use strict';

function countBullsAndCows(generated, input) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < generated.length; i++) {
    if (input.includes(generated[i])) {
      generated[i] === input[i]
        ? bulls++
        : cows++;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = { countBullsAndCows };
