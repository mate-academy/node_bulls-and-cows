import readline from 'readline';

const handleTerminal = (question, actions, isNeedRefresh, setIsNeedRefresh) => {
  if (isNeedRefresh) {
    return;
  }
  setIsNeedRefresh(false);

  const terminal = readline.createInterface(
    process.stdin,
    process.stdout
  );

  terminal.question(question, (str) => {
    actions(str);
    setIsNeedRefresh(true);
    terminal.close();
  });
};

export default handleTerminal;
