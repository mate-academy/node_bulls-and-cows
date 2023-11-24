'use strict';

function getRandomNumber() {
  const randomNumber = [
    ...new Set([
      ...Array.from({ length: 4 }, (_, i) =>
        i === 0
          ? Math.floor(Math.random() * 9) + 1
          : Math.floor(Math.random() * 10),
      ),
    ]),
  ].join('');

  return randomNumber > 1000 ? randomNumber : getRandomNumber();
}

module.exports = getRandomNumber;
