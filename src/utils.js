'use strict';

function isExact(answer, targetValue) {
  return answer === targetValue;
}

function isTargetLonger(answer, targetValue) {
  return answer.length < targetValue.length;
}

function isTargetShorter(answer, targetValue) {
  return answer.length > targetValue.length;
}

module.exports = {
  isExact,
  isTargetLonger,
  isTargetShorter,
};
