import readlineSync from 'readline-sync';

export function getUserGuess() {
  return readlineSync.question('Enter your 4-digit guess: ');
}

export function displayResult(bulls, cows) {
  // eslint-disable-next-line no-console
  console.log(`Bulls: ${bulls}, Cows: ${cows}`);
}
