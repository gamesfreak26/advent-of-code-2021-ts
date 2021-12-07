export const findLargerMesurementsForStrings = (stringArr: string) => {

  let numArr: number[] = stringArr.split("\n").map(val => parseInt(val));

  const largerMeasurements = findLargerMesurements(numArr);

  return largerMeasurements;
}

export const findLargerMesurements = (numArr: number[]) => {

  let largerThan = 0;

  // if (numArr[1] > numArr[0]) {
  //     largerThan = largerThan + 1;
  // }

  for (let i:number = 1; i < numArr.length ; i++) {

    if (numArr[i] > numArr[i - 1]) {
      largerThan = largerThan + 1;
    }
    
  }
  return largerThan;
}

