'use strict';

const rl = require('readline');
const { stdin, stdout } = require('process');
const { generateNum } = require('./generateNum');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

const reader = rl.createInterface({
  input: stdin,
  output: stdout,
});

const num = generateNum();
let count = 0;

const game = () => {
  console.log(num);

  reader.question('Guess a number: ', (answer) => {
    const guess = +answer;

    count++;

    const result = calculateBullsAndCows(num, guess);

    const bulls = result.bulls;
    const cows = result.cows;

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      console.log(`You guessed the number in ${count} guesses!`);
      reader.close();

      return;
    }

    game();
  });
};

game();
