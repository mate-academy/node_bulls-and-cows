'use strict';

function calculateBullsAndCows(secret, guess) {
  const secretMap = {};

  for (const c of secret) {
    secretMap[c] = secretMap[c] || 0;
    secretMap[c] += 1;
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i] && secretMap[guess[i]] > 0) {
      bulls += 1;
      secretMap[guess[i]]--;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] !== secret[i] && secretMap[guess[i]] > 0) {
      cows += 1;
      secretMap[guess[i]]--;
    }
  }

  return `bulls: ${bulls}, cows: ${cows}`;
}

exports.calculateBullsAndCows = calculateBullsAndCows;
