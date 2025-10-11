const readline = require('readline');

let rl = null;

const initializeReadline = () => {
  if(rl === null) {
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
}

const writeMessage = (message) => {
  process.stdout.write(message + '\n');
};

const askQuestion = (prompt) => {
  initializeReadline();
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
};

const closeIO = () => {
  if(rl !== null) {
    rl.close();
  }
  rl = null;
};

module.exports = {
  writeMessage,
  askQuestion,
  closeIO,
  initializeReadline,
};
