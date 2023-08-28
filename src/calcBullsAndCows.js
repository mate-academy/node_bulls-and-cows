// eslint-disable-next-line strict
const calcBullsAndCows = (number, numberUser) => {
  let cntBulls = 0;
  let cntCows = 0;

  for (let i = 0; i < 4; i++) {
    if (number[i] === numberUser[i]) {
      cntBulls++;
      continue;
    }

    if (number.includes(numberUser[i])) {
      cntCows++;
    }
  }

  return `Bulls: ${cntBulls}, Cows: ${cntCows}`;
};

module.exports = {
  calcBullsAndCows,
};
