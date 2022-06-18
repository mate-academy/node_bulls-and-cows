'use strict';

exports.game = (randomNumber, userNumber) => {
  let cow = 0;
  let bull = 0;

  const checkUserNumber = [...new Set(userNumber)];

  if (checkUserNumber.length < 4 || checkUserNumber.length > 4) {
    return 'Please Enter 4 different numbers';
  }

  for (const iter of userNumber) {
    if (randomNumber.includes(+iter)) {
      cow++;
    }
  }

  for (const key in randomNumber) {
    if (randomNumber[key] === +checkUserNumber[key]) {
      bull++;
      cow--;
    }
  }

  if (bull === 4) {
    return true;
  }

  return `Bull = ${bull}, Cow = ${cow}`;
};
