'use strict';

const readline = require('readline');

const prompt = (msg) => {
  const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => rli.question(`${msg}: `, (answer) => {
    rli.close();
    resolve(answer);
  }));
};

module.exports = prompt;
