'use strict';

const readline = require('readline');
const { bulls } = require('./bulls');
const { cows } = require('./cows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Can you guess numbers?: ', (param) => {
  const resBulls = bulls(param);
  const resCows = cows(param);

  // eslint-disable-next-line no-console
  console.log(`Result ${resBulls} bulls and ${resCows} cows`);

  terminal.close();
});
