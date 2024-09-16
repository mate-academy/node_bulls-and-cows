function getBullsAndCows(userInput, numberToGuess) {
  const bullsCowsCount = {
    bulls: 0,
    cows: 0,
  };
  const userInputArray = Array.from(String(userInput), Number);
  const toGuessArray = Array.from(String(numberToGuess), Number);

  for (let i = 0; i < userInputArray.length; i++) {
    const bullCondition = userInputArray[i] === toGuessArray[i];

    if (bullCondition) {
      bullsCowsCount.bulls++;
    } else if (toGuessArray.includes(userInputArray[i]) && !bullCondition) {
      bullsCowsCount.cows++;
    }
  }

  return bullsCowsCount;
}

module.exports = {
  getBullsAndCows,
};
