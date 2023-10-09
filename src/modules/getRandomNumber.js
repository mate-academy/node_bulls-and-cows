const { MAX_NUMBER, MIN_NUMBER } = require('../constants');

const getRandomNumber = () => {
  return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER);
};

module.exports = getRandomNumber;
