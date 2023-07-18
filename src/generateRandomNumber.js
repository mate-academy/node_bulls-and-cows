export const generateRandomNumber = () => {
  let res = new Set([]);

  while (res.size !== 4) {
    res.add(Math.floor(Math.random() * 9) + 1);
  }

  return Number([...res].join(''));
}
