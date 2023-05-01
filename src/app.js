'use strict';

const readline = require('readline');
const { checkInputNumbers } = require('./logic.js');
const { randomNum } = require('./uniqueNum.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startBullsAndCows() {
  const question1 = 'I did imagine 4 unique numbers already, ';
  const question2 = 'all you need to do is to guess them - ';

  rl.question(
    `${question1}${question2}`,
    (userInput) => {
      const answerOfNodeJs = checkInputNumbers(userInput);

      if (userInput === randomNum) {
        rl.close();
      } else {
        startBullsAndCows();
      };

      // eslint-disable-next-line no-console
      console.log(answerOfNodeJs);
    });
};

startBullsAndCows();
