/* eslint-disable no-console */
'use strict';

const readline = require('node:readline/promises');

const { isNumberValid } = require('./helpers/isNumberValid');
const { countBullsAndCows } = require('./helpers/countBullsAndCows');
const { isNumberUnique } = require('./helpers/isNumberUnique');

const gameTerminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function launchGame(targetNumber) {
  console.log('You should guess the 4-digit number');

  let usersNumber = await gameTerminal.question('Enter number: ');

  while (usersNumber !== targetNumber) {
    if (!isNumberValid(usersNumber)) {
      console.log('Enter exactly 4 digits, with no letters or spaces');

      usersNumber = await gameTerminal.question('Enter number: ');

      continue;
    }

    if (!isNumberUnique(usersNumber)) {
      console.log('All 4 digits should be unique, no duplicates!');

      usersNumber = await gameTerminal.question('Enter number: ');

      continue;
    }

    console.log(
      `Wrong answer! ${countBullsAndCows(targetNumber, usersNumber)}`
    );

    usersNumber = await gameTerminal.question('Your guess: ');
  }

  console.log('You are right! Great job!');

  gameTerminal.close();
};

module.exports.launchGame = launchGame;
