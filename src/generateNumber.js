'use strict';

function generateNumber() {
  let newNumber = '';

  for (let i = 0; i < 4; i++) {
    newNumber += Math.floor(Math.random() * 10).toString();
  }

  return newNumber;
}

module.exports = {
  generateNumber,
};
