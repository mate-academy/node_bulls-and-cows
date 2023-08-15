'use strict';

function random() {
  let checkedValue = false;
  const randomNum = String(Math.ceil(Math.random() * 10000));

  if (randomNum.length !== 4) {
    return random();
  }

  for (let i = 0; i < randomNum.length; i++) {
    for (let q = 0; q < randomNum.length; q++) {
      if (randomNum[i] === randomNum[q] && i !== q) {
        checkedValue = true;
        break;
      }
    }
  }

  return checkedValue ? random() : randomNum;
}

module.exports = { random };
