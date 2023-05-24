'use strict';

function getRandomNumber() {
  return (Math.floor(Math.random() * 9000) + 1000).toString();
}

module.exports.getRandomNumber = getRandomNumber;
