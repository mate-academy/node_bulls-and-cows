'use strict';
const redline = require('readline');
const { randomizer } = require('./helpers')

const terminal = redline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const random = randomizer();

const game = () => {
  terminal.question('enter 4 numbers ', (input) => {
    if (input.trim().length > 4) {
      console.log('more then 4 numbers');
    } else if (input.trim().length < 4) {
      console.log('less then 4 numbers');
    } else {
      for (let i = 0; i < 4; i++) {
        if (random[i] === input[i]) {
          console.log('bull');
        } else if (random.includes(input[i])) {
          console.log('cow');
        }
      }
    }

    if (random !== input) {
      game();
    } else if(random === input) {
      console.log('You win!')
      terminal.close;
    }
  })
};
