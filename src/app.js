'use strict';

const readline = require('readline');
const { compareDigits } = require('./compareDigits');
const { randomDigit } = require('./generateRandom');

const interf = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function asyncAnswer(question) {
  return new Promise(resolve => {
    interf.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function askQuestion(questiion) {
  const answer = await asyncAnswer(questiion);

  if (answer.toString().length !== 4 || isNaN(answer)) {
    askQuestion('Enter a four-digit number: ');

    return;
  }

  const { status, returnAnswer } = compareDigits(answer, randomDigit);

  if (status) {
    process.stdout.write('you guessed. The desired number - ' + answer);
    interf.close();
  } else {
    const message = returnAnswer !== ''
      ? `Your result is - ${returnAnswer}. `
      : '';

    askQuestion(message + 'Try again: ');
  }
}

askQuestion('try to guess the number. Enter a four-digit number: ');
