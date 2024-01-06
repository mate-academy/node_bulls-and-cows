const calculatingBullsAndCows = (userNumber, randomNumber) => {
  let bulls = 0;
  let cows = 0;

  const arr = [];

  userNumber.split('').forEach((_, i) => {
    if (userNumber[i] === randomNumber[i]) {
      bulls += 1;
      arr.push(userNumber[i]);
    }
  });

  userNumber.split('').forEach((el) => {
    if (randomNumber.includes(el) && !arr.includes(el)) {
      cows += 1;
    }
  });

  return {
    bulls, cows,
  };
};

export default calculatingBullsAndCows;
