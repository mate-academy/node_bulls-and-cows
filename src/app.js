/* eslint-disable no-console */
'use strict';

const { random } = require('./random');
const { guess } = require('./guess');

const game = () => {
  const digits = random();

  console.log('Please enter number consist of four unique digits');

  guess(digits);
};

game();
