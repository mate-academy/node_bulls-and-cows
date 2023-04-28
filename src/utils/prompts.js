'use strict';

const userPrompt1 = `* * * W E L C O M E  to * * *
<< The "Bulls & Cows" game >>
=============================
To play enter your name: `;

const userPrompt2 = (userName) => {
  return `Ok, ${userName.toUpperCase()}, here are owr rules:
  1. Game generates 4 different numbers 0-9 & memorize them
  2. You now are prompting to guess these 4
  3. Each attempting input HINT will be provided:
BULL ++ if you guessed Number + && its Position + in row of 4
COW  +- if you guessed Number +, but Position - is missed\n`;
};

const userPrompt3 = (userName) => {
  return `${userName.toUpperCase()}, try to guess 4: `;
};

module.exports = {
  userPrompt1,
  userPrompt2,
  userPrompt3,
};
