/* eslint-disable no-console */
import { restartGame } from './restartGame.js';
import { getGuess } from './getGuess.js';

const nextRoundMessage = 'Please, enter your next guess: ';

export const compareGuessSecret = async(guess, secret, level) => {
  let bulls = 0;
  let cows = 0;
  const answer = guess.split('').map((digit) => +digit);

  for (let i = 0; i < secret.length; i++) {
    if (secret.includes(answer[i])) {
      if (secret[i] - answer[i] === 0) {
        bulls++;
      } else {
        cows++;
      }
    }
  }

  if (bulls === level) {
    console.log('* ----------*');
    console.log('* You guess! ');
    console.log('* ----------*');
    console.log('* ---------------------------*');
    console.log(`* Secret is ${secret.join('')}`);
    console.log('* ---------------------------*');

    restartGame();
  } else {
    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    const newGuess = await getGuess(nextRoundMessage);

    compareGuessSecret(newGuess, secret, level);
  }
};
