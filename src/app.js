'use strict';

const { terminal } = require('./modules/terminal');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

let count = 1;
const generatedNumber = generateRandomNumber();

const answerToUser = () => {
  terminal.question('Please enter a number of 4 different digits\n',
    (answer) => {
      switch (true) {
        case !checkIsValidUserInput(answer):
          count += 1;
          answerToUser();
          break;

        case generatedNumber === +answer:
          terminal.write(`You've guessed the number`
            + ` ${generatedNumber} after ${count} attempt(s)`);
          terminal.close();
          break;

        default:
          terminal.write(
            `${JSON.stringify(getBullsAndCows(+answer, generatedNumber))}\n`
          );
          count += 1;
          answerToUser();
          break;
      }
    });
};

answerToUser();
