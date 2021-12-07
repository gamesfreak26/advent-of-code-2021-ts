import { readFile } from "./readFile";

export const findLargerMesurements = (numArr) => {
    const firstNum = numArr[0];
    let largerThan = 0;

    if (numArr[1] > firstNum) {
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

