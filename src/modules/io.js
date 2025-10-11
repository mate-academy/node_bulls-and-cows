const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const writeMessage = (message) => {
  process.stdout.write(message + '\n');
};

const askQuestion = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
};

const closeIO = () => {
  rl.close();
};

module.exports = {
  writeMessage,
  askQuestion,
  closeIO,
};
