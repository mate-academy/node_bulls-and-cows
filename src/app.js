'use strict';

const readline = require('readline');
const { digitGenerator } = require('./digitGenerator.js');
const { compareDigit } = require('./compareDigit.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let compareResult = {
  bull: 0,
  cow: 0,
};
let amountOfDigits;
let randomDigits;

const getAmount = () => {
  rl.question('Choose amount of digits you want to guess, from 1 to 9: ',
    (receivedAmount) => {
      const enteredAmount = Number(receivedAmount);

      if (enteredAmount > 9 || enteredAmount < 1) {
        // eslint-disable-next-line no-console
        console.log('Please enter valid data!');
        getAmount();
      } else {
        amountOfDigits = enteredAmount;
        randomDigits = digitGenerator(amountOfDigits);
        getAnswer();
      }
    }
  );
};

const getAnswer = () => {
  if (compareResult.bull < amountOfDigits) {
    rl.question(`Try to guess ${amountOfDigits} digits here: `,
      (enteredDigits) => {
        if (enteredDigits.length !== amountOfDigits) {
          // eslint-disable-next-line no-console
          console.log('Please enter valid data!');
        } else {
          compareResult = compareDigit(randomDigits, enteredDigits);

          const bullAnswer
            = `${compareResult.bull} bull`
            + (compareResult.bull < 2 ? '' : 's');
          const cowAnswer
            = `${compareResult.cow} cow` + (compareResult.cow < 2 ? '' : 's');

          // eslint-disable-next-line no-console
          console.log(`You got ${bullAnswer} and ${cowAnswer}`);
        }
        getAnswer();
      });
  } else {
    rl.setPrompt('You won!');
    rl.prompt();
    rl.close();
  }
};

getAmount();
