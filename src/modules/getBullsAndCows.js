'use strict';

function getBullsAndCows(guess, randomNumber) {
  if (guess.length > 4) {
    return 'Your number has more than 4 digits';
  }

  if (guess.length < 4) {
    return 'Your number has less than 4 digits';
  }

  let bulls = 0;
  let cows = 0;
  const target = randomNumber.split('');
  const testLine = [...target];

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === testLine[i]) {
      bulls++;
      testLine[i] = ' ';
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (testLine.includes(guess[i])) {
      cows++;

      const cowIndex = testLine.indexOf(guess[i]);

      testLine[cowIndex] = ' ';
    }
  }

  return `${bulls} Bulls, ${cows} Cows`;
}

module.exports.getBullsAndCows = getBullsAndCows;
