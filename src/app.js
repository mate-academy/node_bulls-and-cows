/* eslint-disable */
'use strict';
/* eslint-enable */

import inquirer from 'inquirer';
import fs from 'fs/promises';

const BullsAndCows = async() => {
  const secret = (Math.random().toString().slice(-4));
  let attempts = 0;
  let answer;

  const rules = await fs.readFile('./src/rules.txt', 'utf-8');

  console.log(rules);

  const tryToGuess = async() => {
    const { guess } = await inquirer.prompt([
      {
        type: 'input',
        name: 'guess',
        message: 'Guess secret number',
      },
    ])
      .catch(() => {
        throw new Error('Enter valid value');
      });

    return guess;
  };

  while (true) {
    answer = (await tryToGuess());

    if (answer.length !== 4) {
      console.log('Wrong input data. Try again!');
      continue;
    }

    attempts++;

    if (secret !== answer) {
      console.log(
        'Wrong! Try again.\nHint',
        getHint(secret, answer),
        `\tAttempts - ${attempts}`
      );
    } else {
      break;
    }
  }

  console.log('You guessed it');
};

BullsAndCows();

function getHint(secret, guess) {
  const partOfSecret = [];

  const bulls = guess.toString().split('')
    .filter((num, idx) => {
      const ifTrue = num === secret.toString()[idx];

      if (ifTrue) {
        partOfSecret.push(idx);
      }

      return ifTrue;
    })
    .length;

  const part = String(secret).split('')
    .filter((_, i) => !partOfSecret.includes(i));

  const cows = guess.toString().split('')
    .filter((num, idx) => num !== secret.toString()[idx]
      && part.includes(num.toString()))
    .reduce((obj, num) => {
      if (!obj[num]) {
        obj[num] = 0;
      }

      obj[num]++;

      return obj;
    }, {});

  return `bulls: ${bulls}, cows: ${Object.keys(cows).length}`;
}
