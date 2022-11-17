/* eslint-disable no-console */
'use strict';

const inquirer = require('inquirer');

const playerInput = async() => {
  const { playerNumber } = await inquirer.prompt([{
    type: 'input',
    name: 'playerNumber',
    message: 'Try to guess the secret',
  }]);

  if (Number.isNaN(playerNumber) || playerNumber.length !== 4) {
    console.log('Enter 4-digits number');

    return playerInput();
  }

  if (new Set(playerNumber.split('')).size !== 4) {
    console.log('All digits must be different');

    return playerInput();
  }

  return playerNumber;
};

module.exports = { playerInput };
