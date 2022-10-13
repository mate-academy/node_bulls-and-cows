import { randomned } from './RandomNumber.js';

export const countCows = (number) => {
  let cows = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] !== randomned[i] && randomned.includes(number[i])) {
      cows++;
    }
  }

  return cows;
};
