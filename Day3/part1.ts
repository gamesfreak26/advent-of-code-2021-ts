export const task1Example = (diagnosticReport: string[]) => {

  let firstDigitOnes = 0;
  let firstDigitZeroes = 0;

  let secondDigitOnes = 0;
  let secondDigitZeroes = 0;

  let thirdDigitOnes = 0;
  let thirdDigitZeroes = 0;

  let fourthDigitOnes = 0;
  let fourthDigitZeroes = 0;

  let fifthDigitOnes = 0;
  let fifthDigitZeroes = 0;

  // TODO: rewrite this to be for any length of number
  for (let i: number = 0; i < diagnosticReport.length; i++) {

    let firstDigit = diagnosticReport[i][0];
    (firstDigit === '1') ? firstDigitOnes++ : firstDigitZeroes++;
  
    let secondDigit = diagnosticReport[i][1];
    (secondDigit === '1') ? secondDigitOnes++ : secondDigitZeroes++;

    let thirdDigit = diagnosticReport[i][2];
    (thirdDigit === '1') ? thirdDigitOnes++ : thirdDigitZeroes++;

    let fourthDigit = diagnosticReport[i][3];
    (fourthDigit === '1') ? fourthDigitOnes++ : fourthDigitZeroes++;

    let fifthDigit = diagnosticReport[i][4];
    (fifthDigit === '1') ? fifthDigitOnes++ : fifthDigitZeroes++;
  }

  let gammaRateString: string = '';

  const gammaFirstDigit = (firstDigitOnes > firstDigitZeroes) ? '1' : '0';
  const gammaSecondDigit = (secondDigitOnes > secondDigitZeroes) ? '1' : '0';
  const gammaThirdDigit = (thirdDigitOnes > thirdDigitZeroes) ? '1' : '0';
  const gammaFourthDigit = (fourthDigitOnes > fourthDigitZeroes) ? '1' : '0';
  const gammaFifthDigit = (fifthDigitOnes > fifthDigitZeroes) ? '1' : '0';

  gammaRateString = gammaFirstDigit 
    + gammaSecondDigit 
    + gammaThirdDigit 
    + gammaFourthDigit
    + gammaFifthDigit;

  const epsilonFirstDigit = (gammaFirstDigit === '1') ? '0' : '1';
  const epsilonSecondDigit = (gammaSecondDigit === '1') ? '0' : '1';
  const epsilonThirdDigit = (gammaThirdDigit === '1') ? '0' : '1';
  const epsilonFourthDigit = (gammaFourthDigit === '1') ? '0' : '1';
  const epsilonFifthDigit = (gammaFifthDigit === '1') ? '0' : '1';

  const epsilonRateString = epsilonFirstDigit 
    + epsilonSecondDigit 
    + epsilonThirdDigit 
    + epsilonFourthDigit 
    + epsilonFifthDigit;

  const gammaRate = convertBinaryToDecimal(gammaRateString);
  const epsilonRate = convertBinaryToDecimal(epsilonRateString);

  return gammaRate * epsilonRate;
}

const convertBinaryToDecimal = (binaryString: string) => {
  return parseInt((binaryString + '')
  .replace(/[^01]/gi, ''), 2);
}


// task1Example(report);
