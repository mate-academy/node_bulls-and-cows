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

  const bullsMessage = bulls > 1 || bulls === 0 ? 'bulls' : 'bull';
  const cowsMessage = cows > 1 ? 'cows' : 'cow';

  const message = `${bulls} ${bullsMessage} and ${cows} ${cowsMessage}`;

  if (bulls === 0 && cows === 0) {
    return -1;
  }

  return message;
};

exports.bullsCowsCalculator = bullsCowsCalculator;
