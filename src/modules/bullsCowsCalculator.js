'use strict';

const bullsCowsCalculator = (randomDigits, userDigits) => {
  const userDigitsToArray = userDigits.split('');
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userDigitsToArray.length; i++) {
    const digitIndex = randomDigits.indexOf(+userDigitsToArray[i]);

    if (digitIndex !== -1) {
      if (digitIndex === i) {
        bulls++;
      } else {
        cows++;
      }
    }
  }

  return {
    bulls,
    cows,
  };
};

exports.bullsCowsCalculator = bullsCowsCalculator;
