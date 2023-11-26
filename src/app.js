/* eslint-disable no-console */
'use strict';

const { generate } = require('./generate');
const { gameIO } = require('./gameIO');

const number = generate();

gameIO(number);
