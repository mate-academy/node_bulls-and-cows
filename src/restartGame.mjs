import { startGame } from './startGame.mjs';
import { terminal } from './terminal.mjs';
import { gameOptions } from './app.mjs';
import { generateSecret } from './generateSecret.mjs';

export const restartGame = () => {
  terminal.question('Do you want to start new game? y/n: ', (guess) => {
    if (guess.toLowerCase() === 'n') {
      terminal.close();
    } else if (guess.toLowerCase() === 'y') {
      const secret = generateSecret(gameOptions.level);

      startGame(gameOptions, secret);
    } else {
      restartGame();
    }
  });
};
