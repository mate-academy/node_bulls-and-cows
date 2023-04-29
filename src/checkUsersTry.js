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

  const bulls = [];
  const cows = [];

  for (let i = 0; i < usersTry.length; i++) {
    if (usersTry[i] === numberToGuess[i]) {
      bulls.push(usersTry[i]);
    } else if (numberToGuess.includes(usersTry[i])) {
      cows.push(usersTry[i]);
    }
  }

  return `You have
  bulls: ${bulls.length ? bulls.join(', ') : 'You have no bull for now'}
  cows: ${cows.length ? cows.join(', ') : 'You have no cows for now'}`;
}

module.exports.checkUsersTry = checkUsersTry;
