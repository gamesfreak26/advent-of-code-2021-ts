const report: string[] = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010"
];

export const task1 = (diagnosticReport: string[]) => {

  let diagnosticReportRecordLength = diagnosticReport[0].length;

  let digitOnes: number[] = new Array(diagnosticReportRecordLength).fill(0);
  let digitZeroes: number[] = new Array(diagnosticReportRecordLength).fill(0);
 

  // TODO: rewrite this to be for any length of number
  for (let i: number = 0; i < diagnosticReport.length; i++) {
    for (let j: number = 0; j < diagnosticReportRecordLength; j++) {
      (diagnosticReport[i][j] === '1') ? digitOnes[j]++ : digitZeroes[j]++;
    }
  }

  let gammaRateString: string = '';
  let epsilonRateString: string = '';

  for (let x: number = 0; x < diagnosticReportRecordLength; x++) {
    const gammaDigit = (digitOnes[x] > digitZeroes[x]) ? '1' : '0';
    const epsilonDigit = (gammaDigit === '1') ? '0' : '1';

    gammaRateString += gammaDigit;
    epsilonRateString += epsilonDigit;
  }

  const gammaRate = parseInt(gammaRateString, 2);
  const epsilonRate = parseInt(epsilonRateString, 2);

  return gammaRate * epsilonRate;
}


task1(report);
