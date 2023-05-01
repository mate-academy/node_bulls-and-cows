'use strict';

function checkUsersTry(usersTry, numberToGuess) {
  if (isNaN(+usersTry) || usersTry.length !== 4) {
    return 'The number must contain only 4 digits!';
  }

  if (new Set(usersTry).size !== 4) {
    return 'The number must contain only unique digits!';
  }

  if (usersTry === numberToGuess) {
    return 'OK';
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < usersTry.length; i++) {
    if (usersTry[i] === numberToGuess[i]) {
      bulls++;
    } else if (numberToGuess.includes(usersTry[i])) {
      cows++;
    }
  }

  return `You have
  bulls: ${bulls}
  cows: ${cows}`;
}

module.exports.checkUsersTry = checkUsersTry;
