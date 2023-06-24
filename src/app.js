'use strict';

const { terminal } = require('./terminal.js');
const { messages } = require('./messages.js');
const { game } = require('./game.js');

terminal.question(messages.welcome, (confirmation) => {
  if (confirmation === 'y' || confirmation === 'Y') {
    game();
  } else {
    terminal.close();
  }
});
