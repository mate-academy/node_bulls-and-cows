'use strict';

module.exports = {
  arrayOf4RandomDigits: function() {
    const win = [];

    do {
      const number = Math.floor(Math.random() * 9);

      if (!win.includes(number)) {
        win.push(number);
      }
    } while (win.length !== 4);

    return win;
  },
};
