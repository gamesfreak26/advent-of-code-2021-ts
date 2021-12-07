import { findLargerMesurements } from "./part1";

export const findLargerWindowMesurements = (numArr: number[]) => {

  let windows : number[] = [];

  for (let i:number = 0; i < numArr.length - 2; i++) {
    let sum = numArr[i] + numArr[i+1] + numArr[i+2];
    windows.push(sum);
  }

  const largerThan = findLargerMesurements(windows)

  return largerThan;
}

export const findLargerWindowsMesurementsForStrings = (stringArr: string) => {

  let numArr: number[] = stringArr.split("\n").map(val => parseInt(val));

  const largerMeasurements = findLargerWindowMesurements(numArr);

  return largerMeasurements;
}