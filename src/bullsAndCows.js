'use strict';

function isValid(value) {
  if (value.length !== 4) {
    return false;
  }

  if (Number.isNaN(+value)) {
    return false;
  }

  return true;
}

function handleAddOne(arr) {
  return arr.map(item => item + 1);
}

function count(digits, answer) {
  const bullsIdx = [];
  const cowsIdx = [];
  const digitsArr = digits.split('');

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === answer[i]) {
      bullsIdx.push(i);
    }
  }

  for (let i = 0; i < digits.length; i++) {
    if (bullsIdx.includes(i)) {
      continue;
    }

    if (
      digitsArr.includes(answer[i])
      && !bullsIdx.includes(`${i}`
      )) {
      cowsIdx.push(i);
    }
  }

  return {
    bulls: handleAddOne(bullsIdx),
    cows: handleAddOne(cowsIdx),
  };
}

module.exports = {
  isValid,
  count,
};
