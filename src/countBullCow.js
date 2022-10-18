/* eslint-disable no-console */
'use strict';

function countBullCow(task, userVersion) {
  let result = [];

  for (let i = 0; i < 4; i++) {
    if (task[i] === Number(userVersion[i])) {
      result.push('bull');
      continue;
    }

    if (task.includes(Number(userVersion[i]))) {
      result.push('cow');
      continue;
    }
    result.push('?');
  }

  console.log(result);

  console.log('Bull = ' + result.filter(el => el === 'bull').length
    + '; Cows = ' + result.filter(el => el === 'cow').length);

  return result;
}
module.exports = { countBullCow };
