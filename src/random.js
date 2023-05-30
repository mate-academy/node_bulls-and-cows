'use strict';

const random = () => {
  const generatedRandom = Math.random().toString().slice(2);

  const result = [];
  let digits = 4;

  for (let i = 0; i < digits; i++) {
    if (!result.includes(+generatedRandom[i])) {
      result.push(+generatedRandom[i]);
    } else {
      digits++;
    }
  }

  return result;
};

module.exports.random = random;
