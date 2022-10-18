'use strict';

function randomNumber() {
  const task = [];

  while (task.length < 4) {
    const random = Math.floor(Math.random() * 10);

    if (!task.includes(random)) {
      task.push(random);
    }
  }

  return task;
}
module.exports = { randomNumber };
