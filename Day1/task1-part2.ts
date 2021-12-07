import { findLargerMesurements } from "./part1";

const report: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];


const task1b = (numArr: number[]) => {
  let windows : number[] = [];

  for (let i:number = 0; i < numArr.length - 2; i++) {
    let sum = numArr[i] + numArr[i+1] + numArr[i+2];
    windows.push(sum);
  }

  const largerThan = findLargerMesurements(windows)

  return largerThan;
}

task1b(report);

