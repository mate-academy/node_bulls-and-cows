/* eslint-disable no-console */
'use strict';

const { question } = require('./terminal');
const { enterMessage, welcomeMessage } = require('./messages');

console.log(welcomeMessage);

const { handleUserAnswer } = require('./handleUserAnswer');

question(enterMessage, handleUserAnswer);
