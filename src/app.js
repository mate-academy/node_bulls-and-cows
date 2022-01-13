'use strict';

const readline = require('readline');
const { bull } = require('./bull');
const { cows } = require('./cows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Can you guess numbers?: ', (inpTer) => {
  const resBull = bull(inpTer);
  const resCows = cows(inpTer);

  // eslint-disable-next-line no-console
  console.log(`result ${resBull} bull and ${resCows} cows`);
  terminal.close();
});
