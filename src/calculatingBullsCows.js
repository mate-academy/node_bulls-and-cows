'use strict';

module.exports.calculatingBullsCows = (inputNum, patternNum) => {
  const coutBulls = [...patternNum]
    .reduce((count, item, i) => count + (item === inputNum[i] ? 1 : 0), 0);

  const countCows = [...patternNum]
    .reduce((count, item) => count + (inputNum.includes(item) ? 1 : 0), 0)
    - coutBulls;

  return `${coutBulls > 0
    ? `${coutBulls} bull${coutBulls > 1
      ? 's'
      : ''}${countCows > 0
      ? ' and '
      : ''}`
    : ''}${countCows > 0
    ? `${countCows} cow${countCows > 1
      ? 's'
      : ''}`
    : ''}`;
};
