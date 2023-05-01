'use strict';

const { randomNum } = require('./uniqueNum.js');

const checkInputNumbers = function(numstring) {
  const answerObject = {
    bulls: 0,
    cows: 0,
  };

  let answerString = '';

  const randomNumArr = randomNum.split('');
  const numStrArr = numstring.split('');

  const toBullsOrToCows = function(i) {
    if (randomNumArr[i] === numStrArr[i]) {
      answerObject.bulls++;
    } else if (randomNumArr.includes(numStrArr[i])) {
      answerObject.cows++;
    }
  };

  randomNumArr.map((value, index) => toBullsOrToCows(index));

  if (answerObject.bulls > 1) {
    answerString += `${answerObject.bulls} bulls`;
  } else if (answerObject.bulls === 1) {
    answerString += `${answerObject.bulls} bull`;
  }

  if (answerObject.bulls > 0 && answerObject.cows > 0) {
    answerString += ' and ';
  }

  if (answerObject.cows > 1) {
    answerString += `${answerObject.cows} cows`;
  } else if (answerObject.cows === 1) {
    answerString += `${answerObject.cows} cow`;
  }

  if (answerObject.bulls === 4) {
    answerString += ' - Congrats! You win!';
  } else {
    answerString += ' - ...try again!';
  }

  return answerString;
};

module.exports = { checkInputNumbers };
