'use strict';

const readline = require('readline');

const getPlayerNumber = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  })
    .then(result => result.split(''))
    .then(result => result.map(num => Number(num)));
};

const getCheckedPlayerNumber = async() => {
  let isCorrect;
  let result;

  do {
    isCorrect = true;

    result = await getPlayerNumber(`Enters a number of 4 different `
      + `digits (from 0 to 9)\n Your number -> `);

    result.forEach(num => {
      if (result.length > 4
        || !isFinite(num)
        || result.indexOf(num) !== result.lastIndexOf(num)
      ) {
        isCorrect = false;
      }
    });
  } while (!isCorrect);

  return result;
};

module.exports = getCheckedPlayerNumber;
