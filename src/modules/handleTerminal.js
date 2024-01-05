import readline from 'readline';

const handleTerminal = (question, actions) => {
  const terminal = readline.createInterface(
    process.stdin,
    process.stdout
  );

  return new Promise((resolve) => {
    terminal.question(question, (str) => {
      actions(str);
      terminal.close();

      resolve();
    });
  })
};

export default handleTerminal;
