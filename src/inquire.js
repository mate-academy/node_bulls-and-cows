'use strict';

const inquirer = require('inquirer');

const MESSAGE = 'Enter a number of 4 different digits';
const ERROR = 'Please, enter a number of 4 different digits';

module.exports = {
  askForUserDigits: () => {
    const questions = [
      {
        name: 'digits',
        type: 'input',
        message: MESSAGE,
        validate: function(value) {
          const digits = new Set(value.split(''));

          if (digits.size === 4) {
            return true;
          }

          return ERROR;
        },
      },
    ];

    return inquirer.prompt(questions);
  },
};
