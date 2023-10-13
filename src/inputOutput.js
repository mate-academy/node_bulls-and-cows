'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports.askGuess = function(callback) {
  rl.question('Please enter your guess: ', callback);
};

module.exports.closeInput = function() {
  rl.close();
};
