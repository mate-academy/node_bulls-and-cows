export function getBulls(gameDigits, userDigits) {
  let bullCounter = 0;

  for (let i = 0; i < gameDigits.length; i++) {
    const currentGameDigit = gameDigits[i];
    const currentUserDigit = userDigits[i];

    if (currentGameDigit === currentUserDigit) {
      bullCounter++;
    }
  }

  return bullCounter;
}
