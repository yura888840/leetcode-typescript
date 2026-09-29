import { describe, expect, test } from 'vitest';
import { solve } from './solution';

// Adapt inputs and expected results to the problem, then remove .skip.
describe.skip('solve', () => {
  const cases = [
    { name: 'empty', nums: [] as number[], want: 0 },
  ];

  test.each(cases)('$name', ({ nums, want }) => {
    expect(solve([...nums])).toBe(want);
  });
});
