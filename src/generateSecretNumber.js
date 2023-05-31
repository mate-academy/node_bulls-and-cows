'use strict';

module.exports = {
  generateSecretNumber: () => Math.floor(Math.random() * 9000) + 1000,
};
