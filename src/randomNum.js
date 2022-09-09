/* eslint-disable */
'use strict';
/* eslint-enable */

// Creating a 4 random different digits by 1 to 5:
function randomNums() {
  const result = [];

  for (let i = 0; i < 4; i++) {
    const randomNum = Math.floor(Math.random() * 6);

    if (!result.includes(randomNum) && randomNum !== 0) {
      result.push(randomNum);
    } else {
      i--;
    }
  }

  // Let the user to guess it =)
  return result.join('');
}

export { randomNums };
