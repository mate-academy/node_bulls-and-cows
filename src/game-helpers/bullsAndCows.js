'use strict';

function bullsAndCows(number, usersNumber) {
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < usersNumber.length; i++) {
    if (usersNumber[i] === number[i]) {
      bulls++;

      continue;
    }

    if (number.includes(usersNumber[i])) {
      cows++;
    }
  }

  const phrase = `Your result: ${bulls} - bulls, ${cows} - cows!`;

  return phrase;
}

module.exports.bullsAndCows = bullsAndCows;
