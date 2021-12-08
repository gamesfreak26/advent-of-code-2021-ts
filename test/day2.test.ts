import { day2a } from "../Day2/part1";

describe('Day 2', () => {
    test('should return the correct value for the example given', () => {
        let report:string[] = [
            'forward 5',
            'down 5',
            'forward 8',
            'up 3',
            'down 8',
            'forward 2'
          ]

        const actual = day2a(report);

        expect(actual).toBe(150);
    });
});