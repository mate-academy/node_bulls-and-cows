'use strict';

const { gameTerminal } = require('./game-helpers/terminal');
const { phrases, startGame } = require('./game-helpers/game');

gameTerminal.question(phrases.startMessage, startGame);
