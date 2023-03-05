'use strict';

const handlingErrors = (playerNum) => {
  const matchNumber = playerNum.match(/\d/ig);

  if (matchNumber === null || matchNumber.length < 4) {
    throw Error(`${playerNum}, it doesn't seams like 4 digits`);
  }

  if (playerNum.length !== 4) {
    throw Error(`Please enter 4 digits not ${playerNum.length}`);
  }
};

module.exports = {
  handlingErrors,
};
