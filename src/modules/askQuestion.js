'use strict';

const readline = require('readline');
const { stdout, stdin } = require('process');

const askQuestion = (question) => {
  const terminal = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  return new Promise(resolve => terminal.question(question, answer => {
    terminal.close();
    resolve(answer);
  }));
};

module.exports = {
  askQuestion,
};
