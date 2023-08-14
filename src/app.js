import { isValidNumber } from './isValidNumber.js';
import { countBullsAndCows } from './countBullsAndCows.js';
import { terminal } from './terminal.js';

function ask() {
  terminal.question('Угадай число: ', (personNumber) => {
    try {
      isValidNumber(personNumber);
    } catch (error) {
      console.log(error.message);

      return ask();
    }

    const [ cows, bulls ] = countBullsAndCows(personNumber);

    if (bulls === 4) {
      console.log(`Cows: ${cows}, bulls: ${bulls}`);
      console.log('You`re winner');
      terminal.close();
    } else {
      console.log(`Cows: ${cows}, bulls: ${bulls}`);

      return ask();
    }
  });
}

ask();
