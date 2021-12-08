import { readFile } from "../Day1/readFile";
import { mulplication, splitArrayByNewLines } from "../Day2/part1";
import * as path from 'path';

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

    const actual = mulplication(report);

    expect(actual).toBe(150);
  });

  test('should return the correct value for the example given', () => {
    const file = readFile(
      path.join(
        __dirname, 
        '../../adventOfCode/Day2/inputs/input.txt'
      )
    );

    const splitFile = splitArrayByNewLines(file);

    const actual = mulplication(splitFile);

    expect(actual).toBe(1728414);
  });
});
