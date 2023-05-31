'use strict';

function getRanndomNumber() {
  return String(Math.floor(1000 + Math.random() * 9000));
};

module.exports = getRanndomNumber;
