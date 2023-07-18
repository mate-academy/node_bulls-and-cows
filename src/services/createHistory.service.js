'use strict';

function createHistoryService(history) {
  const blueColor = '\x1b[34m';

  return history.reduce((hist, step) => {
    return `${hist}${blueColor}Bulls:\x1b[0m ${
      step.bulls
    } ${blueColor}Cows:\x1b[0m ${
      step.cows
    } ${blueColor}Step:\x1b[0m ${step.step} \n`;
  }, '');
}

module.exports.createHistoryService = createHistoryService;
