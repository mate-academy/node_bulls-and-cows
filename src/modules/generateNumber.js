'use strict';

function generateNumber() {
  return String(
    Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  );
}

module.exports = { generateNumber };
