'use strict';

function check4input(input) {
  const inputArray = String(input).replace(/[^\d]/g, '').split('');
  const unique = new Set(inputArray);

  return unique.size === 4;
}

module.exports = {
  check4input,
};
