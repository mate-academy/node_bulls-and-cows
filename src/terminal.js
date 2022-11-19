'use strict';

/* eslint-disable no-console */
const inquirer = require('inquirer');

const { generateNumber } = require('./generate.js');
const { calculating } = require('./calculating.js');

exports.askToUser = async() => {
  const initialNum = generateNumber();

  console.log(initialNum);

  const { inputNums } = await inquirer.prompt([
    {
      type: 'input',
      name: 'inputNums',
      message: 'Enter 4 different digints: ',
      validate(input) {
        const done = this.async();
        const checkUniq = [...new Set(input)].join('');

        setTimeout(function() {
          if (checkUniq.length !== 4 || isNaN(checkUniq)) {
            done('You need to provide a number with 4 uniq digits');

            return;
          }

          done(null, true);
        }, 1000);
      },
    },
  ]);

  if (inputNums === initialNum) {
    console.log('You won!');
  } else {
    console.log(calculating(initialNum, inputNums));
  }
};
