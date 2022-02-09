import { generateRandomNumber } from './generateNumber.js';
import { compareNumber } from './compareNumber.js';
import readline from 'readline';

export const createTerminal = () => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const numSize = 4;
  const generatedNum = generateRandomNumber(numSize);

  terminal.question(
    `Please guess a number of ${numSize} different digits -  `,
    (answer) => {
      if (answer.length !== numSize || !+answer) {
        console.log('Incorrect input');
        terminal.close();

        return;
      }

      console.log('User: ', answer);
      console.log('Computer: ', generatedNum);
      console.log(compareNumber(generatedNum, answer, numSize));
      terminal.close();
    });
};
