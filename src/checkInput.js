'use strict';

module.exports = (input) => (
  new Set([...input]).size !== 4 || !/^\d{4}$/.test(input)
);
