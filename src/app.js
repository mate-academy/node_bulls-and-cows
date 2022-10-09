/* eslint-disable no-console */
'use strict';

const inquirer = require('inquirer');
const { getNumber } = require('./getNumber.js');
const { getCowsAndBulls } = require('./getCowsAndBulls.js');

const game = async() => {
  let attempt = 0;
  let wrong = true;
  const goal = getNumber();
  const goalString = String(goal);

  console.log(goal);

  while (wrong) {
    const responce = await inquirer.prompt([{
      name: 'number',
      // eslint-disable-next-line max-len
      message: `input 4 numbers and don't repeat yourself, it is ${attempt} attempt`,
      type: 'number',
      default: 0,
      validate: (n) => String(n).length > 0
        && String(n).length < 5
        && new Set(String(n)).size === String(n).length,
    }]);

    if (responce.number === goal) {
      console.log(`You are  win from ${attempt} attempt`);
      wrong = false;
    } else {
      attempt++;

      const { cows, bulls } = getCowsAndBulls(responce.number, goalString);

      console.log(`cows: ${cows}, bulls: ${bulls}`);
    }
  }
};

game();
