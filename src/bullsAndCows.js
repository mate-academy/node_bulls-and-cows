'use strict';

const checkBullsAndCows = (randomNumber, userNumber) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < randomNumber.length; i++) {
    const randomNumberElement = randomNumber[i];
    const userNumberElement = userNumber[i];

    if (randomNumberElement === userNumberElement) {
      bulls++;
      continue;
    }

    if (userNumber.includes(randomNumberElement)) {
      cows++;
    }
  }

  return [bulls, cows];
};

module.exports = { checkBullsAndCows };
