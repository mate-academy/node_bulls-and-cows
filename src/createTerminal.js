import { generateNumber } from './generateNumber.js';
import { compareNumber } from './compareNumber.js';
import readline from 'readline';

export const createTerminal = () => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const generatedNum = generateNumber();

  terminal.question(
    'Please guess a number of 4 different digits -  ',
    (answer) => {
      if (answer.length !== 4 || !+answer) {
        console.log('Incorrect input');
        terminal.close();

        return;
      }

      console.log('User: ', answer);
      console.log('Computer: ', generatedNum);
      console.log(compareNumber(generatedNum, answer));
      terminal.close();
    });
};
