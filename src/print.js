/* eslint-disable no-console */
'use strict';

const chalk = require('chalk');
const figlet = require('figlet');

const settings = {
  horizontalLayout: 'full',
};

const START_MESSAGE = 'Bulls And Cows';
const WIN_MESSAGE = 'Congratulations';

module.exports = {
  start: function() {
    console.log(
      chalk.bgMagenta(
        figlet.textSync(START_MESSAGE, settings)
      )
    );
  },
  result: function(bulls, cows) {
    console.log(chalk.bgCyan.bold(`Bulls: ${bulls}, Cows: ${cows}`));
  },
  win: function() {
    console.log(
      chalk.bgMagenta(
        figlet.textSync(WIN_MESSAGE, settings)
      )
    );
  },
};
