const resultChecker = (randomNumber, guessedNumber) => {
  let bulls = 0;
  let cows = 0;
  let result = false;

  for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] === guessedNumber[i]) {
      bulls += 1;
    } else if (randomNumber.includes(guessedNumber[i])) {
      cows += 1;
    }
  }

  if (bulls === 4) {
    result = true;
  }

  const resultMessage = result
    ? "You have successfully guessed " + guessedNumber
    : `Bulls - ${bulls}, cows - ${cows}`;

  console.log(resultMessage);

  return result;
};

module.exports = { resultChecker };
