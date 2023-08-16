'use strict';

const readline = require('readline');
const { checkedNumbers } = require('./checkNum');
const { random } = require('./random');

const terminalInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNum = random();

function terminalQuestion() {
  terminalInput.question('Please enter a number ', (number) => {
    const checkedNumberFromRandom = checkedNumbers(randomNum, number);
    const checkedBull = checkedNumberFromRandom.filter(item => item === 'bull');

    if (checkedBull.length === 4) {
      terminalInput.write('You win');
      terminalInput.close();
    } else {
      terminalInput.write(`${checkedNumberFromRandom.join(' ')}\n`);
      terminalQuestion();
    }
  });
}

terminalQuestion();
