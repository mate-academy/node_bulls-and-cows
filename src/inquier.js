'use strict';

const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'numb',
    message: 'Enter the quess: ',
  },
];

const inquier = async() => ((await inquirer.prompt(questions)).numb);

module.exports = {
  inquier,
};
