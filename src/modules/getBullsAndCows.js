function getBullsAndCows(userInput, targetNumber) {
  const userInputStr = userInput.toString();
  const targetNumberStr = targetNumber.toString();
  const result = { bulls: 0, cows: 0 };
  const targetNumberDigits = Array.from(targetNumberStr);

  for (let i = 0; i < targetNumberStr.length; i++) {
    if (userInputStr[i] === targetNumberStr[i]) {
      result.bulls += 1;
      targetNumberDigits[i] = null;
    }
  }

  for (let i = 0; i < targetNumberStr.length; i++) {
    if (userInputStr[i] !== targetNumberStr[i]) {
      const indexInGuess = targetNumberDigits.indexOf(userInputStr[i]);

      if (indexInGuess !== -1) {
        result.cows += 1;
        targetNumberDigits[indexInGuess] = null;
      }
    }
  }

  return result;
}

module.exports = { getBullsAndCows };
