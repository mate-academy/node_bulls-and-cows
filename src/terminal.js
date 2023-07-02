'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (message) => {
  return new Promise((resolve, reject) => {
    terminal.question(message, (data) => {
      resolve(data);
    });
  });
};

const sendMessage = (message) => {
  // eslint-disable-next-line
  console.log(message);
};

const endinteraction = () => {
  terminal.close();
};

const messageObj = {
  enter: 'Enter a 4-digit number - ',
  bullAndCows(bulls) {
    return `${bulls[0]} bull and ${bulls[1]} cows\n`;
  },
  win: '4 bull and 0 cows. You found a number!!!',
};

module.exports.askQuestion = askQuestion;
module.exports.sendMessage = sendMessage;
module.exports.endinteraction = endinteraction;
module.exports.messageObj = messageObj;
