'use strict';

function showMessage(initial, data) {
  // eslint-disable-next-line no-console
  console.log(data.map((item, i) => {
    switch (true) {
      case initial[i] === item:
        return 'bull';

      case initial.includes(item):
        return 'cow';

      default:
        return 'none';
    }
  }));
}

module.exports = {
  showMessage,
};
