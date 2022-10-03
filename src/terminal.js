import readline from 'readline';

export const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
