/* eslint-disable no-console */
import { getGuess } from './getGuess.mjs';
import { compareGuessSecret } from './compareGuessSecret.mjs';
import { validateGuess } from './validateGuess.mjs';

export const startGame = async (gameOptions, secret) => {
  const startGameMessage = 'Gameplay looks like: \n'
    + 'you enter your guess - 4 different digits. Computer compares it with \n'
    + 'the secret and gives you two clues: numbers of "bulls" and "cows". \n'
    + 'What does this mean? A bull is a digit which is present in the secret \n'
    + 'in the same position. And a cow is a digit which is present in \n'
    + 'the secret but in the different position. \n'
    + 'For example, computer makes `1234`, user prints `1345`. The result is \n'
    + 'one `bull` (guessed digit `1` is on it`s place) and 2 `cows` \n'
    + '(digits `3` and `4` are present but on wrong places) \n'
    + '\n'
    + 'Type "exit" to interrupt game \n'
    + '\n'
    + `Please, enter ${gameOptions.level} different digits: `;

  console.log('* -----------------------------------*');
  console.log('* Current secret -', secret);
  console.log('* -----------------------------------*');

  const guess = await getGuess(startGameMessage);
  const validatedGuess = await validateGuess(guess, gameOptions.level);

  compareGuessSecret(validatedGuess, secret, gameOptions.level);
};
