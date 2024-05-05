'use strict';

const readline = require('readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);

const numberRandom = generateRandomNumber();

const app = () => {
  terminal.question(
    `You need to guess numbers. Write a number that is length equals 4.
      If you guessed number and position its Bull + 1.
      If you guessed only number its Cow + 1.
      Write down number and push enter.
      Write 'Exit' to stop game`,
    (numberUser) => {
      if (numberUser === 'Exit') {
        global.console.log(
          `The computer chose ${numberRandom}. You are weakling`,
        );

        process.exit();
      }

      if (+numberUser === numberRandom) {
        global.console.log(`You won, congratulations!`);

        process.exit();
      }

      const result = getBullsAndCows(numberUser, numberRandom);

      if (!checkIsValidUserInput(numberUser)) {
        global.console.log('Was writen isn`t correct value, try again');
      } else {
        global.console.log(
          `You prints ${numberUser}. Your result is Bulls - ${result.bulls}, Cows - ${result.cows}`,
        );
      }

      app();
    },
  );
};

app();
