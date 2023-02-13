'use strict';

module.exports = (input) => (
  new Set([...input]).size !== 4
  || input.length !== 4
  || [...input].some(d => isNaN(+d))
);
