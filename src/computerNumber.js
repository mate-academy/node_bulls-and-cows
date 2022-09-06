'use strict';

const random = Math.floor(Math.random() * 10000);
const computerRandom = `${random}`.padStart(4, '0');

module.exports = computerRandom;
