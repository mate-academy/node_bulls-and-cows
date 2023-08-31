'use strict';

const { generating } = require('./generating.js');
const { calculating } = require('./calculating.js');
const { game } = require('./game.js');

const secretNumber = generating();

game(secretNumber, calculating);
