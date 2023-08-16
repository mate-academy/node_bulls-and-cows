'use strict';

function random() {
  let checkedValue = false;
  const magicNumber = 4;
  const randomNum = String(Math.ceil(Math.random() * 10000));

  if (randomNum.length !== magicNumber) {
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
