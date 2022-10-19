'use strict';

function countBullsAndCows(randomNum, numFromUser) {
  if (randomNum.length !== numFromUser.length) {
    return 'number length should be equal';
  }
  console.log(+numFromUser);

  if (!Number.isFinite(+numFromUser) && !Number.isInteger(+numFromUser)) {
    return 'input should be a finite integer';
  }

  const randomNumArr = randomNum.split('');
  const numFromUserArr = numFromUser.split('');
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < randomNumArr.length; i++) {
    if (randomNum[i] === numFromUser[i]) {
      bulls++;
      randomNumArr.slice(i, 1);
      numFromUserArr.slice(i, 1);
    }
  }

  for (let i = 0; i < numFromUserArr.length; i++) {
    const indexToDelete = randomNumArr.indexOf(numFromUserArr[i]);

    if (indexToDelete >= 0) {
      cows++;
      randomNumArr.slice(indexToDelete, 1);
    }
  }

  return {
    input_was: numFromUser,
    secret_number: randomNum,
    bulls,
    cows,
  };
};

module.exports.countBullsAndCows = countBullsAndCows;
