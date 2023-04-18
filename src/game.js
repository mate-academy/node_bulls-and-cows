'use strict';

const readline = require('readline');
const getRandomNumber = require('./randomizer');
const checkCattle = require('./checkCattle');
const myConsole = require('console');

const win = `
              (      )
              ~(^^^^)~
               ) @@ \\~_          |\\
              /     | \\        \\~ /
             ( 0  0  ) \\        | |
              ---___/~  \\       | |
               /'__/ |   ~-_____/ |
o          _   ~----~      ___---~
  O       //     |         |
         ((~\\  _|         -|
   o  O //-_ \\/ |        ~  |
        ^   \\_ /         ~  |
               |          ~ |
               |     /     ~ |
               |     (       |
                \\     \\      /\\
               / -_____-\\   \\ ~~-*
               |  /       \\  \\
               / /         / /
             /~  |       /~  |
             ~~~~        ~~~~
`;

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function game() {
  myConsole.log('፨ Buls and cows ፨');

  const number = getRandomNumber(1000, 9999).toString();
  let isEnd = false;

  while (!isEnd) {
    try {
      await turn(number);
    } catch (err) {
      isEnd = true;
    }
  }
}

async function turn(number) {
  return new Promise((resolve, reject) => {
    terminal.question('Gues my 4 digit number: ', (userInput) => {
      if (userInput === number) {
        myConsole.log('You won!!!', win);
        terminal.close();
        reject(new Error());

        return;
      }

      const result = checkCattle(number, userInput);

      if (result.length) {
        myConsole.log(result.join(' '));
      } else {
        myConsole.log('Gues again ¯\\_(ツ)_/¯');
      }

      resolve(result);
    });
  });
}

module.exports = game;
