/* eslint-disable no-console */
/* eslint-disable padding-line-between-statements */
function generateRandomNumber() {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 9000) + 1000;
  } while (new Set(randomNumber.toString()).size !== 4);

  return randomNumber;
}

module.exports = { generateRandomNumber };
