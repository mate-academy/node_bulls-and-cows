'use strict';

const IscalculatingRight = (userInput) => {
  const params = userInput;

  if (params.length !== 4) {
    throw new Error('Please write 4 different digits');
  }

  const isUniq = [];

  for (let i = 0; i < params.length; i++) {
    if (isNaN(+params[i])) {
      throw new Error('There should be only digits');
    } else {
      if (isUniq.includes(params[i])) {
        throw new Error('There should be 4 different digits');
      } else {
        isUniq.push(params[i]);
      }
    }
  }

  return params;
};

module.exports.IscalculatingRight = IscalculatingRight;
