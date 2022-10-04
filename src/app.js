/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const random = require('./setRandomNumber');
const { counter } = require('./counterBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.setPrompt(`Input guess number: `);
terminal.prompt();

terminal.on('line', (guessNumber) => {
  if (!/^[0-9]{4}/.test(guessNumber) || guessNumber.length !== 4) {
    console.log('Please, enter a number of 4 digits');
  } else {
    const set = new Set(guessNumber);
    const setValue = set.values();

    let inputNum = '';

    for (const val of setValue) {
      inputNum += val;
    }

    if (inputNum.length !== 4) {
      console.log('Please, enter a number of 4 different digit');
    } else {
      const [bulls, cows] = counter(random.randomNumber, inputNum);

      if (bulls === 4) {
        console.log('CONGRATS! \n YOU WIN!');
        terminal.close();
      } else {
        console.log(
          `${bulls} ${bulls > 1
            ? 'bulls' : 'bull'} and ${cows} ${cows > 1
            ? 'cows'
            : 'cow'}`
        );
      }
    }
  }
});
