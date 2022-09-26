/* eslint-disable no-console */
'use strict';

const programNumber = require('./getRandomInt');
const calculation = (ques) => {
  let bulls = 0;
  let cows = 0;
  const answer = ques.split('');
  const random = programNumber.programNumber.split('');
  const check = '0123456789';

  if (answer.every(el => check.includes(el)) && ques.length === 4) {
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === random[i]) {
        bulls++;
      } else if (random.includes(answer[i]) && answer[i] !== random[i]) {
        cows++;
      }
    }

    console.log('\n', '=========================================', '\n', '\n',
      '     You choice: ', answer, '\n', '\n',
      '          bulls: ', bulls, '\n', '\n',
      '           cows: ', cows);
  } else {
    console.log('Invalid data: Enter please correct 4 digit!!!');
  }
};

module.exports = { calculation };
