'use strict';

function random() {
  let checkedValue = false;
  const randomNum = Math.ceil(Math.random() * 10000);

  for (let i = 0; i < randomNum.length; i++) {
    for (let q = 0; q < randomNum.length; q++) {
      if (randomNum[i] === randomNum[q]) {
        checkedValue = true;
        break;
      }
    }
  }

  return checkedValue ? random() : String(randomNum);
}

module.exports = { random };
