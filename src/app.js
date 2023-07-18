import readline from 'readline';
import { generateRandomNumber } from './generateRandomNumber.js';
import { calculateBullsAndCows } from './calculateBullsAndCows.js';
const randomNumber = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the game bulls and cows!');

const playBullsAndCows = () => {
  terminal.question('Guess the number ', (userInput) => {
    calculateBullsAndCows(userInput, randomNumber);

    if (Number(userInput) === randomNumber) {
      console.log('Congratulations! You have guessed the correct number');
      terminal.close();
    } else {
      playBullsAndCows();
    }
  });
}

playBullsAndCows();
