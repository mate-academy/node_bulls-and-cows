/* eslint-disable no-console */
'use strict';

const chalk = require('chalk');
const figlet = require('figlet');

module.exports = {
  start: function() {
    console.log(
      chalk.bgMagenta(
        figlet.textSync('Bulls And Cows', {
          horizontalLayout: 'full',
        })
      )
    );
  },
  result: function(bulls, cows) {
    console.log(chalk.bgCyan.bold(`Bulls: ${bulls}, Cows: ${cows}`));
  },
  win: function() {
    console.log(
      chalk.bgMagenta(
        figlet.textSync('Congratulations', {
          horizontalLayout: 'full',
        })
      )
    );
  },
};
