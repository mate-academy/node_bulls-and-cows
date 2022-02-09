export const compareNumber = (random, user, numSize) => {
  let bull = 0;
  let cow = 0;

  for (let i = 0; i < numSize; i++) {
    if (random[i] === user[i]) {
      bull++;
      continue;
    }

    if (user.includes(random[i])) {
      cow++;
    }
  }

  return `${bull} bull and ${cow} cow`;
};
