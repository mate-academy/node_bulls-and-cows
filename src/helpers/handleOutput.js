/* eslint-disable no-console */
import { getRandom } from './getRandom.js';
import { calculateBullsCows } from './calculateBullsCows.js';

export const handleOutput = (number, terminal) => {
  for (let i = 0; i < number.length; i++) {
    if (isNaN(+number[i])) {
      console.log('You have to pass only digits');
      terminal.close();
      
      return;
    }
  }

  if (number.length !== 4) {
    console.log('You have to pass 4 digits. Try again');
    terminal.close();

    return;
  }

  const currentValues = {};

  for (let i = 0; i < number.length; i++) {
    if (number[i] in currentValues) {
      console.log(`You have to pass different numbers. 
Don\`t repeat. Try again`);
      terminal.close();

      return;
    }
    currentValues[number[i]] = 0;
  }

  const computerArray = getRandom();

  calculateBullsCows(computerArray, number);

  terminal.close();
};
