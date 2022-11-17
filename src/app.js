import generateSecretNumber from './generateSecretNumber.js';
import { play } from './play.js';

const secretNumber = generateSecretNumber('')()()()();

// eslint-disable-next-line no-console
console.log(secretNumber);

play(secretNumber);
