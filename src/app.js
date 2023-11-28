'use strict';

const { numbers } = require('./generateNum.js');
const { terminal } = require('./terminal.js');
const { showMessage } = require('./countBulsAndCows.js');

terminal.question('Enter 4 numbers', (data) => {
  showMessage(numbers, data.slice(0, 4).split(''));
  terminal.close();
});
