'use strict';

const isValid = (data) => {
  return data.length === 4
    && new Set(data).size === 4
    && !isNaN(data);
};

module.exports = { isValid };
