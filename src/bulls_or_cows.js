'use strict';

exports.game = (randomNumber, userNumber) => {
  let bulls = 0;
  let cows = 0;
  const randomNumberObject = {};
  const userNumberObject = {};

  for (let i = 0; i < randomNumber.length; i++) {
    if (isNaN(userNumber[i])) {
      return 'Pleaze write 4 numbers';
    }

    randomNumberObject[randomNumber[i]] = i;
    userNumberObject[userNumber[i]] = i;
  }

  for (const key in randomNumberObject) {
    if (
      key in userNumberObject
      && randomNumberObject[key] === userNumberObject[key]
    ) {
      bulls++;
      continue;
    }

    if (key in userNumberObject) {
      cows++;
    }
  }

  if (bulls === 4) {
    return `Greate you win! Number was: ${randomNumber}`;
  }

  return `Bulls: ${bulls}, Cows: ${cows}`;
};
