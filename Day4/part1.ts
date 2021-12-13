import * as path from 'path';
import { readFile } from "../Day1/readFile";

const file = readFile(
    path.join(
      __dirname, 
      '../../adventOfCode/Day4/inputs/testInput.txt'
    )
  );

const task1 = (input: string[]) => {
  const splitFile = file.split('\n\n');

  const randomNumbers = splitFile[0];
  
  let boardsStrings = [];
 
  
  // Each board is an array of length 5 but is the string of numbers.
  for (let i = 1; i < splitFile.length; i++) {
      boardsStrings.push(splitFile[i].split('\n'));
  }

  const filteredBoards = filterBoards(boardsStrings);
  let a = 5;
}

const filterBoards = (boardArr: string[]) => {
  
  let boards = [];
  
  for (let j = 0; j < boardArr.length; j++) {
    for (let k = 0; k < 5; k ++) {
      boards.push(boardArr[j][k].split(' '))
    }  
  }
  
  let filteredBoards = [];

  for (let x = 0; x < boards.length; x++) {
    filteredBoards.push(boards[x].filter((val: string) => val));
  }
  
  return filteredBoards;
}

task1(file);
let a = 5;