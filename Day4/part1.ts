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

  let rndNumberSliced: string[] = [];

  const randomNumbers = splitFile[0];
  const splitrandomNumbers = randomNumbers.split(',');
  
  for (let a = 0; a < splitrandomNumbers.length; a += 5) {
    let slice = splitrandomNumbers.slice(a, a+5);
    rndNumberSliced.push(slice);
  }
  


  let boardsStrings = [];
 
  for (let i = 1; i < splitFile.length; i++) {
      boardsStrings.push(splitFile[i].split('\n'));
  }
  // All boards in a multidimensional array as strings.  
  let filteredBoardStrings = filterBoards(boardsStrings);

  let sum = 0;
  let winningBoard = -1;

  for (let h = 0; h < rndNumberSliced.length; h++) {
    for(let i = 0; i < filteredBoardStrings.length; i++) {
      if (rndNumberSliced[h].includes(filteredBoardStrings[i])) {
        filteredBoardStrings[i] = '-1';
      } 
    }
    // check winning board
  }

  let b = 5;
}

const checkWinningBoard = (board) => {


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

  // make the multidimensional array into just a normal array
  return filteredBoards.flat();
}

task1(file);