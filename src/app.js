'use strict';
import readline from 'readline';
import { generateFourDigits } from './generateFourDigits.js'
import { game } from './game.js'

const terminal = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});


function start() {
  console.log('_'.repeat(30));

  terminal.question(' Write a 4-digit number: ', (answer) => {
    const fourDigits = generateFourDigits();
    
    
    console.log(game(fourDigits, answer));
    console.warn(` The correct answer is: ${fourDigits}!`);
    console.log('‾'.repeat(30), '\n', 'try again...');

    start();
  });
}

start();
