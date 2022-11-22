/* eslint-disable no-console */
import { createInterface } from './helpers/input.js';
import { handleOutput } from './helpers/handleOutput.js';

const question = `We guessed a number of 4 digits. Try to guess them.
\nEnter 4 digits: `;

const terminal = createInterface();

terminal.question(question, (number) => {
  handleOutput(number, terminal);
});
