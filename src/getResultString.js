'use strict';

function getResultString(obj) {
  if (Object.values(obj).length === 0) {
    return ('You didn\'t guess');
  }

  const isManyCows = obj.cow > 1
    ? 'cows'
    : 'cow';

  const isManyBulls = obj.bull > 1
    ? 'bulls'
    : 'bull';

  switch (true) {
    case obj.bull && obj.cow:
      return `You have ${obj.bull} ${isManyBulls} and ${obj.cow} ${isManyCows}`;

    case obj.bull && !obj.cow:
      return `You have ${obj.bull} ${isManyBulls}`;

    case obj.cow && !obj.bull:
      return `You have ${obj.cow} ${isManyCows}`;

    default:
      return 'Smt went wrong';
  }
}

module.exports = { getResultString };
