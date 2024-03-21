'use strict';

const { getBullsAndCows } = require('../src/modules/getBullsAndCows');

describe('getBullsAndCows', () => {
  test('returns 0 bulls and 0 cows when there are no matches', () => {
    expect(getBullsAndCows(1234, 5678)).toEqual({
      bulls: 0,
      cows: 0,
    });
  });

  test('returns correct number of bulls and 0 cows', () => {
    expect(getBullsAndCows(1234, 1289)).toEqual({
      bulls: 2,
      cows: 0,
    });
  });

  test('returns 0 bulls and correct number of cows', () => {
    expect(getBullsAndCows(1234, 4321)).toEqual({
      bulls: 0,
      cows: 4,
    });
  });

  test('returns 0 cows and correct number of bulls', () => {
    expect(getBullsAndCows(1234, 1234)).toEqual({
      bulls: 4,
      cows: 0,
    });
  });

  test('returns correct number of bulls and cows', () => {
    expect(getBullsAndCows(1234, 1243)).toEqual({
      bulls: 2,
      cows: 2,
    });
  });
});
