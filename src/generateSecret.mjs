export const generateSecret = (level) => {
  const secret = new Set();

  while (secret.size < level) {
    const number = Math.floor(Math.random() * 10);

    secret.add(number);
  }

  return [...secret];
};
