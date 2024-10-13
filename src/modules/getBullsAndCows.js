'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {number} userInput - The user input
 * @param {number} numberToGuess - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  const strUser = String(userInput);
  const strRandom = String(numberToGuess);

  const result = { bulls: 0, cows: 0 };

  // Массивы для отслеживания использованных цифр
  const userUsed = Array(4).fill(false);
  const randomUsed = Array(4).fill(false);

  // Считаем быков
  for (let i = 0; i < 4; i++) {
    if (strUser[i] === strRandom[i]) {
      result.bulls += 1;
      userUsed[i] = true; // Помечаем использованные цифры
      randomUsed[i] = true; // Помечаем использованные цифры
    }
  }

  // Считаем коров
  for (let i = 0; i < 4; i++) {
    if (!userUsed[i]) {
      // Проверяем, не использована ли эта цифра
      for (let j = 0; j < 4; j++) {
        if (!randomUsed[j] && strUser[i] === strRandom[j]) {
          result.cows += 1;
          randomUsed[j] = true;

          break;
        }
      }
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
