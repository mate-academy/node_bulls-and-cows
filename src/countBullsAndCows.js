import { getRandomNumber } from './getRandomNumber.js';

const number = getRandomNumber();

const countBullsAndCows = (personNumber) => {
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < personNumber.length; i++) {
    if (number.includes(personNumber[i])) {
      const rightIndex = number.split('').findIndex(currentNumber => (
        currentNumber === personNumber[i]
      ));

      if (rightIndex === i) {
        bulls++;
      } else {
        cows++;
      }
    }
  }

  return [cows, bulls];
};

export { countBullsAndCows };
