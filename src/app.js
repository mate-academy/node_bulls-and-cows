/* eslint-disable no-console */
'use strict';

const { caclulateBullsAndCows } = require('./calculateBullsAndCows');
const { generateNumber } = require('./generator');
const { userTerminal } = require('./userTerminal');
const { messages } = require('./constants/messages');

const {
  helloMessage,
  requireMessage,
  lengthError,
  rulesMessage,
  uniqueError,
  winMessage,
} = messages;

const randomNumber = generateNumber();

userTerminal.question(helloMessage, (answer) => {
  if (answer === 'yes') {
    console.log(rulesMessage);

    let attempts = 0;

    const game = () => {
      userTerminal.question(requireMessage, (userNumber) => {
        if (isNaN(userNumber) || userNumber.length !== 4) {
          console.log(lengthError);
          game();

          return;
        }

        if (userNumber.length !== (new Set(userNumber).size)) {
          console.log(uniqueError);
          game();

          return;
        }

        const { bulls, cows } = caclulateBullsAndCows(userNumber, randomNumber);

        if (bulls === 4) {
          userTerminal.write(winMessage);
          userTerminal.close();
        } else {
          attempts++;

          userTerminal.write(
            `Attempts: ${attempts}`
            + ` Bulls: ${bulls} `
            + ` Cows: ${cows}.\n`
          );
          game();
        }
      });
    };

    game();
  } else {
    userTerminal.close();
  }
});
