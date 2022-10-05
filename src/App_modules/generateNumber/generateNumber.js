export const randFourDig = {
  rnd() {
    let number = '';
    for (let i = 0; i < 4; i++ ) {
      number += Math.round(Math.random() * 10);
    }
    return number;
  },
};
