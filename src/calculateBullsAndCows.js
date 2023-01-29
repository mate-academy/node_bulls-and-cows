'use strict';

function calculateBullsAndCows(generated, guessed) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guessed.length; i++) {
    if (generated[i] === guessed[i]) {
      bulls++;

      continue;
    }

    if (generated.includes(guessed[i])) {
      cows++;
    }
  }

  return `Result: bulls - ${bulls}, cows - ${cows}`;
}

module.exports.calculateBullsAndCows = calculateBullsAndCows;
