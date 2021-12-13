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
 
  for (let i = 1; i < splitFile.length; i++) {
      boardsStrings.push(splitFile[i].split('\n'));
  }
  // All boards in a multidimensional array.  
  let filteredBoards = filterBoards(boardsStrings);

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

  let boardContent = [];
  for (let j = 0; j < filteredBoards.length; j+=5) {
    boardContent.push(filteredBoards.slice(j, j+5));
  }

  return boardContent;
}

task1(file);