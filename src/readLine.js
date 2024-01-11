'use strict';

const readline = require('readline');
const {
  stdin: input,
  stdout: output,
} = require('process');

const rl = readline.createInterface({
  input, output,
});

module.exports = {
  rl,
};
