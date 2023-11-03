/* eslint-disable no-console */
'use strict';

const _ = require('lodash');
const readline = require('readline');
const { bullsAndCows } = require('./bullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function getInput(row) {
  terminal.question('Put your numbers: ', num => {
    input = num.split('');

    if (new Set(input).size !== 4) {
      console.log('Numbers must be unique and length 4');
      getInput(row);
    } else if (_.isEqual(row, input)) {
      console.log('You right!');
      terminal.close();
    } else {
      console.log(bullsAndCows(row, input));
      getInput(row);
    }
  });
}

module.exports = { getInput };
