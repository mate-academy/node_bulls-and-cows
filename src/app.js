'use strict';

function generateNum() {
  let res = '';
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * (10 - i));

    res += numbers.splice(index, 1)[0];
  }

  return res;
}

function input() {
  const usersNum = process.argv[2];

  if (usersNum.length !== 4) {
    throw new Error('You should enter a number of 4 digits');
  }

  for (let i = 0; i < 4; i++) {
    if (usersNum.slice(i + 1).includes(usersNum[i])) {
      throw new Error('You should enter different digits');
    }
  }

  return usersNum;
}

function output(obj) {
  // eslint-disable-next-line no-console
  console.log(`Bulls: ${obj.bulls}, cows: ${obj.cows}`);
}

function bullsCows(usersNum) {
  const result = {
    bulls: 0,
    cows: 0,
  };

  const generatedNum = generateNum();

  for (let i = 0; i < 4; i++) {
    if (usersNum[i] === generatedNum[i]) {
      result.bulls++;
      continue;
    }

    if (generatedNum.includes(usersNum[i])) {
      result.cows++;
    }
  }

  return result;
}

output(bullsCows(input()));

module.exports = {
  generateNum,
  input,
  output,
  bullsCows,
};
