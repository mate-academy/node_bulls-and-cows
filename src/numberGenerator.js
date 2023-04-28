'use strict';

const { SECRET_SIZE } = require('./constants');

const generateNumber = () => Math.floor(Math.random() * 10);

const generateSecretNumbers = () => (
  Array.from({ length: SECRET_SIZE }, _ => generateNumber())
);

module.exports = {
  generateSecretNumbers,
};
