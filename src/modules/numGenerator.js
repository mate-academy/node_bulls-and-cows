'use strict';

const numGenerator = () => {
  const difigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  difigits.sort(() => Math.random() - 0.5);

  return difigits.slice(0, 4).join('');
};

module.exports = {
  numGenerator,
};
