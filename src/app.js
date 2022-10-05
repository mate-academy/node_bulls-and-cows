/* eslint-disable no-console */
'use strict';

import readline  from 'readline';
import { randFourDig } from './App_modules/generateNumber/generateNumber.js';
import { calculating } from './App_modules/calculating/calculating.js';
import { tryGuessNum } from './App_modules/tryGuessNum/tryGuessNum.js'


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = randFourDig.rnd();

console.log(`I've alredy riddled a four-digit number. Can you guess it?`);

tryGuessNum(secret, calculating, rl);
