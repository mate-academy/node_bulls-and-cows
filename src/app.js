/* eslint-disable no-console */
'use strict';

const { numGenerator } = require('./numGenerator');
const { getValidInput } = require('./input');

const terminal = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generatedNum = +numGenerator();

console.log(generatedNum);

const gameFlow = () => {
  console.log('please enter four digit number, every gigit has to be unique! ');

  terminal.question('Give it a try!: ', (userNum) => {
    const result = getValidInput(generatedNum, userNum);

    if (result.includes('input') || result.includes('getting')) {
      console.log(result);
      gameFlow();

      return;
    }

    terminal.close();
    console.log(result);
  });
};

gameFlow();
