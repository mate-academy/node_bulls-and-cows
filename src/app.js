/* eslint-disable */
'use strict';
/* eslint-enable */

import { randomNums } from './randomNum.js';
import { terminalFunction } from './terminal.js';

// Random number as a base setup:
const computerNums = randomNums();

// - Init the game.
// |-- True means its a first start of the game
// |-- and we need to print the rules of the game):
terminalFunction(computerNums, true);

// Let's see how good you are! =)
