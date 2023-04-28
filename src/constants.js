'use strict';

const WELCOME = '⏜⏝⏜⏝⏜⏝⏜⏝⏜⏝ BULLS & COWS ⏜⏝⏜⏝⏜⏝⏜⏝⏜⏝';
const SEE_YOU = 'See you soon! 👋🏻';
const ENTER_THE_NUMBER = 'Please enter the number 🖊️:   ';
const YOU_WIN = ' ✅  Congrats You are a Winner ✅ ';
const NUMBER_LENGTH_ERROR
  = ' ❌  Oops, the number must be exactly 4 digits long ❌ ';
const UNIQUE_NUMBER_ERROR = ' ❌  Oops, the number digits must be unique ❌ ';
const TYPEOF_ERROR = ' ❌  Oops, wrong format, use digits ❌ ';
const ANSWER_ERROR = ' ❌  Oops, choose "y" or "n" to continue ❌ ';

module.exports = {
  SEE_YOU,
  ANSWER_ERROR,
  ENTER_THE_NUMBER,
  NUMBER_LENGTH_ERROR,
  UNIQUE_NUMBER_ERROR,
  TYPEOF_ERROR,
  YOU_WIN,
  WELCOME,
};
