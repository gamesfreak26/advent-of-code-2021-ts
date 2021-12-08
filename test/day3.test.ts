import { task1Example } from "../Day3/part1";

describe('Day 3 Part 1', () => {
  test('should return the correct value with the example given', () => {
    const report: string[] = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010"
    ];

    const actual = task1Example(report);
    expect(actual).toBe(198);
  });
});