/* eslint-disable no-console */
'use strict';

const inquirer = require('inquirer');
const { game } = require('./game');

const terminal = async() => {
  const { userInput } = await inquirer.prompt([
    {
      type: 'input',
      name: 'userInput',
      message: 'Try to guess secret number: ',
    },
  ]);

  const userNumber = userInput.split('');

  const games = game(userNumber);

  if (games === true) {
    console.log('Wow, awesome!');
  } else {
    console.log(games);
    terminal();
  }
};

terminal();
