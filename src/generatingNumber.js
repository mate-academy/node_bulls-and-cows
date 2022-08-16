'use strict';

function generatingNumber() {
  const num = Math.floor(1000 + Math.random() * 9000);

  if ([...new Set(num.toString().split(''))].length !== num.toString().length) {
    generatingNumber();
  }

  return num;
}

module.exports.generatingNumber = generatingNumber;
