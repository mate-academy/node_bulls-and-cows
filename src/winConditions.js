/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const valueComparison = (userGuess, computerRandom, guess) => {
  const { bull, cow } = guess;

  console.log(`computer value: ${computerRandom}`);
  console.log(`your guess: ${userGuess}`);

  let cowString = '';
  let bullString = '';
  let finalString = 'The result is: ';

  if (bull.number.length > 0 || cow.number.length > 0) {
    if (bull.number.length > 0) {
      const multiple = bull.number.length > 1;

      bullString = `${bull.number.length} bull${multiple ? 's' : ''} (guessed ${bull.number.join(', ')} at position${multiple ? 's' : ''} ${bull.position.join(', ')}) `;

      finalString += bullString;
    }

    if (cow.number.length > 0) {
      const multiple = cow.number.length > 1;

      cowString = `${cow.number.length} cow${multiple ? 's' : ''} (digits ${cow.number.join(', ')} ${multiple ? 'are' : 'is'} present but on the wrong place${multiple ? 's' : ''})`;

      finalString += cowString;
    }
  } else {
    finalString = 'you guessed nothing';
  }

  console.log(finalString);
};

const cowsAndBulls = (userGuess, computerRandom) => {
  const guess = {
    cow: {
      number: [],
      position: [],
    },
    bull: {
      number: [],
      position: [],
    },
  };

  for (let i = 0; i < 4; i++) {
    if (computerRandom[i] === userGuess[i]) {
      guess.bull.number.push(computerRandom[i]);
      guess.bull.position.push(i);
    }

    if (computerRandom.includes(userGuess[i])) {
      guess.cow.number.push(userGuess[i]);
      guess.cow.position.push(i);
    }
  }

  valueComparison(userGuess, computerRandom, guess);
};

module.exports = cowsAndBulls;
