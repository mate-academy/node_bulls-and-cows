'use strict';

/* eslint no-console: ["error", { allow: ["log"] }] */

const rules = () => {
  console.log(`

        |||||   ||   ||  ||     ||||||    |||||
        ||  ||  ||   ||  ||     ||       ||
        |||||   ||   ||  ||     ||||||    |||
        || ||   ||   ||  ||     ||           ||
        ||  ||   |||||   |||||  ||||||   |||||

`);

  console.log(
    `
    Players try to guess 4 random unique digits
    by entering 4 unique digits, farmer will give tips after every attempt.

    For instance:

    Computer makes "1234", user prints "1345".

    The result is:
      - one bull (guessed digit 1 is on it's place)
      - 2 cows (digits 3 and 4 are present but on wrong places).

    `
  );
};

module.exports = {
  rules,
};
