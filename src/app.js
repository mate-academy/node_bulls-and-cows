// eslint-disable-next-line strict
'use strict';
import inquirer from 'inquirer';

import { generateNumber } from './generate_number.js';
import { bullAndCows } from './bullAndCow.js';
import { checkUserNumber } from './checkUserNumber.js';

const randomNumber = String(generateNumber());

const game = async() => {
  let playing = true;

  while (playing) {
    const { userNumber } = await inquirer.prompt([
      {
        type: 'input',
        name: 'userNumber',
        message: 'Try to guess secret number: ',
      },
    ]);

    checkUserNumber(userNumber);

    if (Number.isInteger(+userNumber) && userNumber.length === 4) {
      if (!bullAndCows(randomNumber, userNumber)) {
        playing = false;
      }
    }
  }
};

game();
