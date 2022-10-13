import { randomned } from './RandomNumber.js';

export const countBulls = (number) => {
  let bulls = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] === randomned[i]) {
      bulls++;
    }
  }

  return bulls;
};
