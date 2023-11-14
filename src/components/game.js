'use strict';

/* eslint no-console: ["error", { allow: ["log"] }] */

const readline = require('readline');
const { sleep } = require('../utils/delay');
const { message } = require('../utils/messages');
const { checkUnique } = require('../utils/checkUnique');
const { guessChecker } = require('../utils/guessChecker');
const { randomNumberGenerator } = require('../utils/randomNumberGenerator');

const DIGITS_LENGTH = 4;

const EnumCounter = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
};

const randomNumber = randomNumberGenerator(DIGITS_LENGTH);
let attemptsCounter = 0;

// GAME

const bullsAndCows = async(level, name) => {
  const userName = name || 'no_name_player';

  attemptsCounter++;

  await message(attemptsCounter, userName, level);

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const questions = attemptsCounter === 1
    ? `
  > Farmer: Let's begin! Type your first numbers


> ${userName}:  `
    : `
  > Farmer: Type your next attempt ${userName}


> ${userName}:  `;

  terminal.question(questions, (userStr) => {
    const usersNumber = Number(userStr);

    terminal.close();

    if (isNaN(usersNumber)) {
      console.log(`
    ***It is not a number dude!***
      `);
      bullsAndCows(level, userName);

      return;
    }

    if (userStr.length !== DIGITS_LENGTH) {
      console.log(`
    ***Number length is not - 10***
      `);
      bullsAndCows(level, userName);

      return;
    }

    if (!checkUnique(userStr)) {
      console.log(`
    ***Numbers are not unique dude!***
      `);
      bullsAndCows(level, userName);

      return;
    }

    const result = guessChecker(randomNumber, userStr);

    if (result.bull < 4) {
      const bulls = result.bull;
      const cows = result.cow;
      const chikdrenResult = result.childrenMade;

      if (level === 'HARD') {
        console.log(`
    ***The result ${
  bulls === 1 ? 'is' : 'are'
} ${EnumCounter[bulls]} ${
  bulls === 1 ? 'bull' : 'bulls'
} and ${EnumCounter[cows]} ${
  cows === 1 ? 'cow' : 'cows'
}***        (⌐■_■)
`);

        bullsAndCows(level, userName);

        return;
      } else {
        console.log(`
    ***Your result is [${chikdrenResult}]***
    `);

        bullsAndCows(level, userName);

        return;
      }
    }

    console.log(`
  > Farmer: Right!, It's ${
  randomNumber.join('')
}. Number of attempts: ${attemptsCounter}    ヽ༼◥▶ل͜◀◤༽ﾉ

  > Farmer: and you won...`);

    sleep(1500);

    console.log(`
  > Farmer: Ability to clean my farm! Ha-ha-ha!

  > Farmer: Are you happy ${userName}?`);

    sleep(1000);

    console.log(`
  ||||||  ||\\\\  ||  |||||
  ||==    || \\\\ ||  ||  ||
  ||||||  ||  \\\\||  |||||
  `);
  });
};

module.exports = {
  bullsAndCows,
};
