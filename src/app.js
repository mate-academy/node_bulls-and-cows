'use strict';

/* eslint-disable no-console */

const inquirer = require('inquirer');
const countBulls = require('./modules/countBulls');
const countCows = require('./modules/countCows');
const generateNum = require('./modules/generateNum');

const num = generateNum(1000, 9999);
const stats = {};
const questions = [
  {
    type: 'input',
    name: 'attempt',
    message: `Type 4-digit number:`,
  },
];

const attempt = async() => {
  return new Promise((resolve) => {
    inquirer.prompt(questions).then(answers => {
      stats.bulls = countBulls(num, +answers.attempt);
      stats.cows = countCows(num, +answers.attempt);
      resolve(+answers.attempt === num);
    });
  });
};

const found = async() => {
  while (true) {
    stats.isFound = await attempt();

    const { bulls, cows, isFound } = stats;

    if (isFound) {
      console.log('You win!');
      console.log(num);
      break;
    }

    console.log(`Bulls: ${bulls}`);
    console.log(`Cows: ${cows}`);
  }
};

found();
