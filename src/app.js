/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { calculation } = require('./calculation');

terminal.question('Gues a number with 4 digit\n', (gues) => calculation(gues));
