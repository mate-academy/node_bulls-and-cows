'use strict';

const readline = require('readline');
const { cowsBullsLogger } = require('./services/log.service');
const { startGame } = require('./startGame');

function app() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  startGame(app, rl);
}

cowsBullsLogger.greeting();
app();
