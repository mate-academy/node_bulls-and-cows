/* eslint-disable no-console */
'use strict';

function checkNumber(num) {
  if (Number.isNaN(+num)) {
    console.log('Number should include onnly numbers');

    return;
  }

  if (num.length !== 4) {
    return console.log('Number should be formed of 4 digits');
  }

  return num;
}

module.exports = checkNumber;
