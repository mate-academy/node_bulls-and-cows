'use strict';

module.exports.getRandom = () => {
  const randomNumber = Math.random() * (9999 - 1000) + 1000;

  return Math.floor(randomNumber);
};
