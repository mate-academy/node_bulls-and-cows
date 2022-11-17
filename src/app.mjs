import generateSecretNumber from './generateSecretNumber.mjs';
import play from './play.mjs';

const secretNumber = generateSecretNumber('')()()()();

// eslint-disable-next-line no-console
console.log(secretNumber);

play(secretNumber);
