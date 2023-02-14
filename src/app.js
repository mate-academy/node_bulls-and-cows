'use strict';

const { createNumber } = require('./createNumber');
const { calculateBullsCows } = require('./bullsAndCows');
const { myInterface } = require('./myInterface');

const gameNumberLength = 4;

const game = () => {
  const winNumber = createNumber(gameNumberLength);
  let tryScore = 0;

  const round = () => {
    myInterface.question('Try to guess a number, enter 4 different digits - ',
      (playerNumber) => {
        if (playerNumber.length !== gameNumberLength) {
          // eslint-disable-next-line no-console
          console.log('please, enter correct number');
          round();

          return;
        }

        const { bulls, cows } = calculateBullsCows(winNumber, playerNumber);

        if (bulls === gameNumberLength) {
          tryScore++;
          // eslint-disable-next-line no-console
          console.log(`you win! you did it in ${tryScore} tries`);
        } else {
          tryScore++;
          // eslint-disable-next-line no-console
          console.log(`you have ${bulls} bulls and ${cows} cows, try again`);
          round();
        }
      });
  };

  round();
};

game();
