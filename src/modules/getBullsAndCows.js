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
  const inputStr = userInput.toString();
  const guessStr = numberToGuess.toString();

  let bulls = 0;
  let cows = 0;

  // Рахуємо бики (правильна цифра на правильній позиції)
  for (let i = 0; i < 4; i++) {
    if (inputStr[i] === guessStr[i]) {
      bulls++;
    }
  }

  // Рахуємо загальну кількість співпадінь цифр
  const inputDigits = inputStr.split('');
  const guessDigits = guessStr.split('');
  const totalMatches = inputDigits.reduce((acc, digit) => {
    return acc + (guessDigits.includes(digit) ? 1 : 0);
  }, 0);

  // Кількість корів = загальні співпадіння - бики
  cows = totalMatches - bulls;

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
