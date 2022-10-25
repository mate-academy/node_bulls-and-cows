'use strict';

const generateOneDigit = () => Math.floor(Math.random() * 9);

const generateDigits = () => {
  let randomNums = '';

  for (let i = 0; i < 4; i++) {
    let num = generateOneDigit();

    while (randomNums.includes(num)) {
      num = generateOneDigit();
    }

    randomNums += num;
  }

  return randomNums;
};

const inputResultCheck = (inputAnswer, correctAnswer) => {
  let bulls = 0;
  let cows = 0;

  for (let char = 0; char < 4; char++) {
    if (inputAnswer[char] === correctAnswer[char]) {
      bulls += 1;
    } else if (correctAnswer.includes(inputAnswer[char])) {
      cows += 1;
    }
  }

  // eslint-disable-next-line no-console
  console.log(`bulls - ${bulls}, cows - ${cows}`);
};

module.exports = {
  generateDigits, inputResultCheck,
};
