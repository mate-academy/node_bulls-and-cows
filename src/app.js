/* eslint-disable no-console */
'use strict';

const { runNewRound } = require('./actions/terminalInterface');
const { NUMBER_SIZE } = require('./actions/variables');

console.log('Welcome to the "Bulls And Cows" game! '
+ `I have generated a ${NUMBER_SIZE}-digit number.`);
console.log(`Enter ${NUMBER_SIZE} different digits.`);
console.log('If the guessed digit is on its place, I count it as a "bull".');

console.log('If the guessed digit exists in the number but the place is wrong, '
+ 'I count it as a "cow".');

runNewRound();
