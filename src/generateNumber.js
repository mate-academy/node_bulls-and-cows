'use strict';

const generateNumber = () => {
  const digits = '0123456789'.split('');
  const shuffle = (set) => {
    for (
      let j, x, i = set.length;
      i;
      j = Math.floor(Math.random() * i), x = set[--i], set[i] = set[j], set[j] = x
    );

    return digits;
  };

  return shuffle(digits).join('').substring(0, 4);
};

module.exports = { generateNumber };
