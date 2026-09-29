import { describe, expect, test } from 'vitest';
import { twoSum } from './solution';

const cases = [
  { name: 'basic', nums: [2, 7, 11, 15], target: 9 },
  { name: 'middle and end', nums: [3, 2, 4], target: 6 },
  { name: 'duplicates', nums: [3, 3], target: 6 },
  { name: 'negative numbers', nums: [-3, 4, 3, 90], target: 0 },
  { name: 'zeroes', nums: [0, 4, 3, 0], target: 0 },
];

describe('twoSum', () => {
  test.each(cases)('$name', ({ nums, target }) => {
    const result = twoSum([...nums], target);
    expect(result).toHaveLength(2);
    const [i, j] = result;
    for (const index of result) {
      expect(Number.isInteger(index)).toBe(true);
      expect(index).toBeGreaterThanOrEqual(0);
      expect(index).toBeLessThan(nums.length);
    }
    expect(i).not.toBe(j);
    expect(nums[i] + nums[j]).toBe(target);
  });
});
