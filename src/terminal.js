/* eslint-disable */
'use strict';
/* eslint-enable */

import readline from 'readline';
import { bullsAndCows } from './bullsAndCows.js';

function terminalFunction(cpNums, isFirstStart) {

  // Base massages in vars:
  const mainQuestion = 'Could you guess the numbers?)\n';
  const rules = '**RULES**'
    + '\nGive me exactly 4 different digits '
    + '\nby 1 to 5 without the spaces (like 1234 or 1352)'
    + '\nAnd I will show the result in bulls and cows, where:'
    + '\n-> bull - guessed digit is on its place'
    + '\n-> cow - guessed digit exists in the number but the place is wrong\n';
  const winText = 'YES!!!\n'
    + 'Congrats!!! You won!';
  const errorText = 'No way, you should give me exactly 4 different digits'
    + '\n by 1 to 5 without the spaces (1234)';

  // This statement will help you to win easily =)
  // console.log(cpNums);

  // Init the terminal input:
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // - If its a first loop of the game
  // |-- we will show the rules of the game:
  if (isFirstStart) {
    console.log(rules);
  }

  // Main terminal setup:
  terminal.question(mainQuestion, (answer) => {
    console.log('Do you think its ' + answer + '?)');

    // - If use give us more then 4 digits
    // |-- we will remind the rules and try again:
    if (answer.length > 4) {
      console.log(errorText);
      terminalFunction(cpNums, true);

    // If user won or tired we ll end the game:
    } else if (answer === cpNums || answer === 'quit') {
      console.log(winText);

      return terminal.close();

      // - So here we ll show to user the Bulls\Cows result
      // |-- and try again:
    } else {
      console.log('So,\n' + bullsAndCows(answer, cpNums) + '\nTry again: ');
      terminalFunction(cpNums, false);
    }
  });
}

export { terminalFunction };
