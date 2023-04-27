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

  const number = getRandomNumber(4).toString();
  let isEnd = false;

  while (!isEnd) {
    isEnd = await turn(number);
  }
}

async function turn(number) {
  return new Promise((resolve, reject) => {
    terminal.question('Gues my 4 digit number: ', (userInput) => {
      if (userInput.length !== 4) {
        myConsole.log('You have to gues 4 digit number... Lets try again', win);
        resolve(false);

        return;
      }

      const userInputDigits = userInput.split('');
      const uniqueDigits = new Set(userInputDigits);

      if (userInputDigits.length !== uniqueDigits.size) {
        myConsole.log('All digits has to be unique {•̃_•̃}');
        resolve(false);

        return;
      }

      if (userInput === number) {
        myConsole.log('You won!!!', win);
        terminal.close();
        resolve(true);

        return;
      }

      const result = checkCattle(number, userInput);

      if (result.length) {
        myConsole.log(result.join(' '));
      } else {
        myConsole.log('Gues again ¯\\_(ツ)_/¯');
      }

      resolve(false);
    });
  });
}

module.exports = game;
