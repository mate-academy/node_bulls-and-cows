/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let bulls = 0;
let cows = 0;

const getRandomNumber = () => {
  let result = '';

  while (result.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!result.includes(randomNumber)) {
      result += randomNumber;
    }
  }

  return result;
};

const randomNum = getRandomNumber();

console.log(randomNum);

const getBullsAndCows = (guess) => {
  const guessArr = guess.split('');
  const guessIsCorrect = guessArr.every((num, ind) => (
    guessArr.lastIndexOf(num) === ind
  ));

  if (guessIsCorrect) {
    guessArr.forEach((num, ind) => {
      if (guessArr[ind] === randomNum[ind]) {
        bulls += 1;
      } else if (randomNum.includes(num)) {
        cows += 1;
      }
    });
    console.log(`bulls: ${bulls}, cows: ${cows}`);
  } else {
    console.log('enter 4 different numbers!');
  }
};

const getGuess = () => {
  input.question('your guess: ', async(guess) => {
    getBullsAndCows(guess);

    if (bulls === 4) {
      console.log('You win!');
      input.close();
    } else {
      bulls = 0;
      cows = 0;
      getGuess();
    }
  });
};

getGuess();
