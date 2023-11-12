'use strict';

/* eslint no-console: ["error", { allow: ["log"] }] */

const readline = require('readline');
const { sleep } = require('../utils/delay');
const { message } = require('../utils/messages');
const { guessChecker } = require('../utils/guessChecker');
const { randomNumberGenerator } = require('../utils/randomNumberGenerator');

const EnumCounter = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
};

// const guessChecker = (numbersToGuess, userInput) => {
//   const userNumbers = String(userInput).split('');
//   const result = {
//     bull: 0,
//     cow: 0,
//     childrenMade: [],
//   };

//   userNumbers.forEach((num, index) => {
//     if (numbersToGuess.includes(num)) {
//       if (numbersToGuess.indexOf(num) === index) {
//         result.bull++;
//         result.childrenMade.push('BULL');
//       } else {
//         result.cow++;
//         result.childrenMade.push('COW');
//       }
//     } else {
//       result.childrenMade.push('wolf');
//     }
//   });

//   return result;
// };

// const randomNumberGenerator = () => {
//   const uniqueNumbers = [];

//   while (uniqueNumbers.length < 4) {
//     const number = Math.floor(Math.random() * 10);

//     if (!uniqueNumbers.includes(number)) {
//       uniqueNumbers.push(number);
//     }
//   }

//   return uniqueNumbers.map(String);
// };

const randomNumber = randomNumberGenerator();
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

    if (userStr.length !== 4) {
      console.log(`
    ***Number length is not - 10***
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
