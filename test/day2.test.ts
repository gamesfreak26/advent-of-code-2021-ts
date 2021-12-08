import { readFile } from "../Day1/readFile";
import { task1, splitArrayByNewLines } from "../Day2/part1";
import * as path from 'path';
import { task2 } from "../Day2/part2";

describe('Day 2 Part 1', () => {
  test('should return the correct value for the example given', () => {
    let report:string[] = [
      'forward 5',
      'down 5',
      'forward 8',
      'up 3',
      'down 8',
      'forward 2'
    ]

    const actual = task1(report);

    expect(actual).toBe(150);
  });

  test('should return the correct value using the input file given', () => {
    const file = readFile(
      path.join(
        __dirname, 
        '../../adventOfCode/Day2/inputs/input.txt'
      )
    );

    const splitFile = splitArrayByNewLines(file);

    const actual = task1(splitFile);

    expect(actual).toBe(1728414);
  });
});

describe('Day 2 Part B', () => {
  test('should return the correct value for the example given', () => {
    let report:string[] = [
      'forward 5',
      'down 5',
      'forward 8',
      'up 3',
      'down 8',
      'forward 2'
    ]

    const actual = task2(report);
    expect(actual).toBe(900);
  });

  test('should return the correct value for the input file given', () => {

    const file = readFile(
      path.join(
        __dirname, 
        '../../adventOfCode/Day2/inputs/input.txt'
      )
    );

    const splitFile = splitArrayByNewLines(file);

    const actual = task2(splitFile);
    expect(actual).toBe(1765720035);
  });
});
