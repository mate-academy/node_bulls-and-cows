/* eslint-disable no-console */
'use strict';

const readline = require('readline-sync');
const messages = require('./messages');
const { generateNumber } = require('./generateNumber');
const { play } = require('./game');

const generatedNumber = generateNumber();

const userName = readline.question(messages.greeter);
const userWantsToPlay = readline.keyInYN(
  `Nice to have you here, ${userName}! Wanna play? `
);

if (!userWantsToPlay) {
  console.log(messages.goodbye);
  process.exit();
}

const isUserFollowing = readline.keyInYN(messages.rules);
let readyToPlay;

if (!isUserFollowing) {
  readyToPlay = readline.keyInYN(messages.explanation);
} else {
  readyToPlay = readline.keyInYN(messages.offer);
}

if (!readyToPlay) {
  console.log(messages.goodbye);
  process.exit();
}

while (true) {
  const userInput = readline.question(messages.question);

  if (userInput === generatedNumber) {
    console.log(messages.win);
    break;
  }

  console.log(play(generatedNumber, userInput));
}
