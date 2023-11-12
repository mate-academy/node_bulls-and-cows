'use strict';

const checkUnique = (numbers) => {
  const set = new Set(numbers.split(''));

  return set.size === 4;
};

module.exports = {
  checkUnique,
};
