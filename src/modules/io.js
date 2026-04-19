/* eslint-disable no-console */
'use strict';

const readline = require('readline/promises');
const { stdin, stdout } = require('process');

let rl;

function init() {
  if (!rl) {
    rl = readline.createInterface({ input: stdin, output: stdout });
  }
}

async function ask(prompt) {
  init();

  return rl.question(prompt);
}

function print(...messages) {
  console.log(...messages);
}

function close() {
  if (rl) {
    rl.close();
    rl = null;
  }
}

module.exports = { ask, print, close };
