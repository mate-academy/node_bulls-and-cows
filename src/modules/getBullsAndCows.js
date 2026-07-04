'use strict';

function getBullsAndCows(secret, guess) {
  // Перетворюємо аргументи на рядки, оскільки тести передають числа
  const secretStr = String(secret);
  const guessStr = String(guess);

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (secretStr[i] === guessStr[i]) {
      bulls++;
    } else if (secretStr.includes(guessStr[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

module.exports = { getBullsAndCows };
