/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { numberGenerator } = require('./numberGenerator');
const { bullAndCowCounter } = require('./bullAndCowCounter');

const randomNumber = numberGenerator();
const arrayOfRandomNumbers = randomNumber.split('');

let userNumber;

function question() {
  terminal.question('What is your number? ', (number) => {
    userNumber = number;

    if (userNumber === randomNumber) {
      console.log(`You won!`);
      terminal.close();

      return;
    }

    const arrayOfUserNumbers = userNumber.split('');

    if (arrayOfUserNumbers.length !== 4 || isNaN(+userNumber)) {
      console.log('Your answer must be a number and the length must be 4.');
      question();

      return;
    }

    for (const num of arrayOfUserNumbers) {
      if (
        arrayOfUserNumbers.indexOf(num) !== arrayOfUserNumbers.lastIndexOf(num)
      ) {
        console.log('The number must have 4 different digits.');
        question();

        return;
      }
    }

    const bullAndCow = bullAndCowCounter(
      arrayOfRandomNumbers, arrayOfUserNumbers
    );

    console.log(`Bull: ${bullAndCow.bull}. Cow: ${bullAndCow.cow}!`);
    question();
  });
}

question();
