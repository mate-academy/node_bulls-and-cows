'use strict';

const { terminal } = require('./terminal');
const { numberGenerator } = require('./numberGenerator');
const { answerChecker } = require('./answerChecker');

const handleGameStart = (enteredNumber) => {
  const handleNumber = new Set(enteredNumber);

  if (handleNumber.size !== 4) {
    console.log('Attention! Number must have 4 different digits!');
    terminal.question('Guess the number ', handleGameStart);

    return;
  }

  const secretNumber = numberGenerator();

  console.log(secretNumber, enteredNumber);

  if (enteredNumber === secretNumber) {
    console.log('You win!');
    terminal.close();

    return;
  }

  const [ bulls, cows ] = answerChecker(secretNumber, enteredNumber);

  console.log(`${bulls} bulls, ${cows} cows`);
  terminal.close();
};

terminal.question('Guess the number ', handleGameStart);
