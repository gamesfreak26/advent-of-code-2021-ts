import { readFile } from "../Day1/readFile";
import { task1 } from "../Day3/part1";
import { task2 } from "../Day3/part2";
import * as path from 'path';
import { splitArrayByNewLines } from "../Day2/part1";

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

    const actual = task1(report);
    expect(actual).toBe(198);
  });

  test('should return the correct value with the input file given', () => {
    const file = readFile(
      path.join(
        __dirname, 
        '../../adventOfCode/Day3/inputs/input.txt'
      )
    );

    const splitFile = splitArrayByNewLines(file);

    const actual = task1(splitFile);
    expect(actual).toBe(738234);
  });
});

describe('Day 3 Part 2', () => {
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

    const actual = task2(report);
    expect(actual).toBe(230);
  });

  test('should return the correct value with the example given', () => {
    const file = readFile(
      path.join(
        __dirname, 
        '../../adventOfCode/Day3/inputs/input.txt'
      )
    );

    const splitFile = splitArrayByNewLines(file);

    const actual = task2(splitFile);
    expect(actual).toBe(1);
  });
});