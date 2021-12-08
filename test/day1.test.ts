import { findLargerMesurements, findLargerMesurementsForStrings } from "../Day1/part1";
import { readFile } from "../Day1/readFile";
const fs = require('fs');
import * as path from 'path';
import { findLargerWindowMesurements, findLargerWindowsMesurementsForStrings } from "../Day1/part2";

describe('Day 1 Part A', () => {
  test('returns the correct value', () => {
    const report: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    const actual = findLargerMesurements(report);
    expect(actual).toBe(7);
  });

  test('should return the correct value after reading the input file', () => {
    const file = readFile(
      path.join(
        __dirname, 
        '../../adventOfCode/Day1/inputs/input1.txt'
      )
    );
    const actual = findLargerMesurementsForStrings(file);

    expect(actual).toBe(1288);
  });
});

describe('Day1 Part2', () => {
  test('returns the correct value', () => {
    const report: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    const actual = findLargerWindowMesurements(report);

    expect(actual).toBe(5);
  });

  test('should return the correct value after reading the input file', () => {
    const file = readFile(
      path.join(
        __dirname, 
        '../../adventOfCode/Day1/inputs/input1.txt'
      )
    );

    const actual = findLargerWindowsMesurementsForStrings(file);

    expect(actual).toBe(1311);
  });
});