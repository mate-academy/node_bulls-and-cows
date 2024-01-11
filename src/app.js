/* eslint-disable no-console */
'use strict';

const { get4Digits } = require('./generateRandom');
const { rl } = require('./readLine');
const { isValid, count } = require('./bullsAndCows');

const number = get4Digits();

function startGame() {
  rl.question('Type 4 digits: ', (answer) => {
    if (!isValid(answer)) {
      console.clear();
      console.log('Answer must contain only 4 digits.');
      startGame();

      return;
    }

    const { bulls, cows } = count(number, answer);

    if (bulls.length === 4) {
      console.log('You win!');
      rl.close();
    } else {
      console.clear();

      if (bulls.length) {
        console.log(`Guessed digit is on its place (${bulls.join(', ')})`);
      }

      if (cows.length) {
        // eslint-disable-next-line max-len
        console.log(`Guessed digit exists in the number but the place (${cows.join(', ')}) is wrong`);
      }

      startGame();
    }
  });
}

console.clear();
startGame();
