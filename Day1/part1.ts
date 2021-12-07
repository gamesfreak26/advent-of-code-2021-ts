export const findLargerMesurementsForStrings = (stringArr: string[]) => {
  let numArr: number[] = [];

  for(let i:number = 0; i < stringArr.length; i++) {
    let parsedNum:number = parseInt(stringArr[i]);
    numArr.push(parsedNum);
  }

  const largerMeasurements = findLargerMesurements(numArr);

  return largerMeasurements;
}

export const findLargerMesurements = (numArr: number[]) => {

  let largerThan = 0;

  if (numArr[1] > numArr[0]) {
      largerThan = largerThan + 1;
  }

  for (let i:number = 2; i < numArr.length; i++) {
    if(i >= numArr.length) {
      break;
    } else {
      if (numArr[i] > numArr[i - 1]) {
        largerThan = largerThan + 1;
      }
    }
  }
  return largerThan;
}

