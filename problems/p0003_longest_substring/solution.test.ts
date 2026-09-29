import { describe, expect, test } from 'vitest';
import { lengthOfLongestSubstring } from './solution';

const cases = [
  { name: 'empty', s: '', want: 0 },
  { name: 'single', s: 'a', want: 1 },
  { name: 'repeating pattern', s: 'abcabcbb', want: 3 },
  { name: 'all same', s: 'bbbbb', want: 1 },
  { name: 'substring not subsequence', s: 'pwwkew', want: 3 },
  { name: 'do not move left backwards', s: 'abba', want: 2 },
  { name: 'overlapping window', s: 'dvdf', want: 3 },
  { name: 'all unique', s: 'abcdef', want: 6 },
  { name: 'space', s: ' ', want: 1 },
  { name: 'punctuation and spaces', s: 'a! a', want: 3 },
];

// Change describe.skip to describe when starting this exercise.
describe.skip('lengthOfLongestSubstring', () => {
  test.each(cases)('$name', ({ s, want }) => {
    expect(lengthOfLongestSubstring(s)).toBe(want);
  });
});
