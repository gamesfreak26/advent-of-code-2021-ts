import { findLargerMesurements } from "../Day1/part1";

describe('Day 1', () => {
  test('Day1 Part1 returns the correct value', () => {
    const report: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    const actual = findLargerMesurements(report);
    expect(actual).toBe(7);
  });
});
