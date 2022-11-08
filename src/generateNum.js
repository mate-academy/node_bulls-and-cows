'use strict';

const generateNum = () => {
  let num = '';

  for (let i = 0; i < 100; i++) {
    const rand = Math.round(Math.random() * 10);

    if (num.length === 4) {
      break;
    }

    if (rand > 0 && rand < 10) {
      if (!num.includes(rand.toString())) {
        num += rand.toString();
      } else {
        continue;
      }
    } else {
      continue;
    }
  }

  return num;
};

module.exports = generateNum;
