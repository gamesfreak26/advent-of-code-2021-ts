import { readFile } from "./readFile";
import * as path from 'path';
import { findLargerMesurementsForStrings } from "./part1";

const task1a = () => {
    const file = readFile(
        path.join(
          __dirname, 
          '../../adventOfCode/Day1/inputs/input1.txt'
        )
    );
    
    const actual = findLargerMesurementsForStrings(file);

    return actual;
}

task1a();

