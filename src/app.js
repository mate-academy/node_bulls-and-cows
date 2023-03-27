'use strict';

const readline = require('readline');
const { processingDigits } = require('./processingDigits');
const { randomNumber } = require('./generateNumber');

function getConversation() {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // eslint-disable-next-line max-len
  terminal.question('Set a number of 4 integers, guess bulls or cows? ', (inputNumber) => {
    if (String(inputNumber).length !== 4) {
      terminal.write('Four digits expected!');
      terminal.close();

      return;
    }

    const [bulls, cows] = processingDigits(randomNumber, inputNumber);

    // eslint-disable-next-line max-len
    terminal.write(` Computer's number - ${randomNumber} \n User's number - ${inputNumber}`);
    terminal.write('\n\nResult: \n');
    terminal.write(` Bulls - ${bulls} \n Cows - ${cows}`);
    terminal.close();
  });
}

getConversation();
