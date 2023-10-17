'use strict';

const numGenerator = () => {
  let digits = '';

  for (let i = 0; i < 4; i++) {
    const nextDigt = Math.round(Math.random() * 9);

    if (!digits.includes(nextDigt)) {
      digits += nextDigt;
    } else {
      i--;
    }
  }

  return digits;
};

module.exports = {
  numGenerator,
};
