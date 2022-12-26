'use strict';

const getPcNumber = () => {
  const pcNumber = [];

  while (pcNumber.length < 4) {
    const tempNumber = Math.floor(Math.random() * 10);

    if (!pcNumber.includes(tempNumber)) {
      pcNumber.push(tempNumber);
    }
  }

  return pcNumber;
};

module.exports = getPcNumber();
