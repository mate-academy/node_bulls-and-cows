'use strict';

const { generateNum } = require('./generateNum');

function getAnswer(userInput) {
  let answer = '';
  const correctAnswer = generateNum();

  userInput.split('').map((num, i) => {
    if (correctAnswer.includes(num) && correctAnswer[i] !== num) {
      answer += 'cow ';
    } else if (correctAnswer.includes(num)) {
      answer += 'bull ';
    }
  });

  return answer;
}

module.exports = {
  getAnswer,
};
