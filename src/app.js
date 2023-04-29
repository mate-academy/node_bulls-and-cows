'use strict';

const readline = require('readline');

const { generateNumber } = require('./generateNumber');
const { checkUsersTry } = require('./checkUsersTry');

const launchGame = () => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const numberToGuess = generateNumber();

  const askUser = () => {
    terminal.question('Guess the number... ', (answer) => {
      const checkedAnswer = checkUsersTry(answer, numberToGuess);

      if (checkedAnswer === 'OK') {
        terminal.write(`Congrats, you won! The number is ${numberToGuess}`);
        terminal.close();
      } else {
        terminal.write(`${checkedAnswer}\n`);
        askUser();
      }
    });
  };

  askUser();
};

launchGame();
