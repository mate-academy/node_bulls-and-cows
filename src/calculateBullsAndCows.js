'use strict';

const calculateBullsAndCows = (randomNumber, guessNumber) => {
  const randomNumberString = randomNumber.toString();
  const guessNumberString = guessNumber.toString();

  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < randomNumberString; i++) {
    if (randomNumberString[i] === guessNumberString[i]) {
      bulls++;
    } else if (randomNumberString.includes(guessNumberString[i])) {
      cows++;
    }
  }

  let bullsCount = '';
  let cowsCount = '';

  if (bulls === 1) {
    bullsCount = 'bull';
  } else {
    bullsCount = 'bulls';
  }

  if (cows === 1) {
    cowsCount = 'cow';
  } else {
    cowsCount = 'cows';
  }

  // eslint-disable-next-line no-console
  console.log(`${bulls} ${bullsCount} and ${cows} ${cowsCount}`);
};

module.exports = {
  calculateBullsAndCows,
};
