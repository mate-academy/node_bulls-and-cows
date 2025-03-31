'use strict';

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const game = readline.createInterface({ input, output });

const rules = ` Do you wanna play? Try to guess the number of 4 digits, input your answer below and compare to result
bull - guessed digit is on its place
cow - guessed digit exists in the number but the place is wrong  `;

const number = generateRandomNumber();

function playing(str) {
  if (checkIsValidUserInput(str)) {
    const oldResult = getBullsAndCows(Number(str), number);
    const value = JSON.stringify(oldResult);

    game.question(`${value}  `, (currentAnswer) => {
      const result = getBullsAndCows(Number(currentAnswer), number);

      if (result.bulls === 4) {
        game.close();
      } else {
        playing(currentAnswer);
      }
    });
  } else {
    game.question('invalid input try again  ', (v) => {
      playing(v);
    });
  }
}

game.question(rules, (answer) => {
  playing(answer);
});
