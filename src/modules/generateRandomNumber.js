'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numerosGerados = [Math.floor(Math.random() * 9) + 1];

  while (numerosGerados.length < 4) {
    const numeroGerado = Math.floor(Math.random() * 10);

    const verificarDuplicatas = numerosGerados.includes(numeroGerado);

    if (!verificarDuplicatas) {
      numerosGerados.push(numeroGerado);
    }
  }

  return Number(numerosGerados.join(''));
}

module.exports = {
  generateRandomNumber,
};
