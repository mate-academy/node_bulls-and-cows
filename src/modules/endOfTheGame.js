'use strict';

const { cowsBullsLogger } = require('../services/log.service');
const { createHistoryService } = require('../services/createHistory.service');

function endOfTheGame(comparing, attempts, history, app) {
  if (comparing.bulls === 4) {
    cowsBullsLogger.gameWin(attempts);
  } else {
    const createHistory = createHistoryService(history);

    cowsBullsLogger.logHistory(createHistory);
    cowsBullsLogger.infoAboutStep(comparing);

    app();
  }
}

module.exports.endOfTheGame = endOfTheGame;
