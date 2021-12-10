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

  let gammaRateString: string = '';
  let epsilonRateString: string = '';

  let diagnosticReportRecordLength = diagnosticReport[0].length;

  for (let j: number = 0; j < diagnosticReportRecordLength; j++) {

    let digitOnes: number = 0;
    let digitZeroes: number = 0;

    diagnosticReport.forEach(line => {
      (line[j] === '1') ? digitOnes++ : digitZeroes++;
    })

    let gammaDigit = (digitOnes > digitZeroes) ? '1' : '0';
    let epsilonDigit = (gammaDigit === '1') ? '0' : '1';

    gammaRateString += gammaDigit;
    epsilonRateString += epsilonDigit;
  }

  const gammaRate = parseInt(gammaRateString, 2);
  const epsilonRate = parseInt(epsilonRateString, 2);

  return gammaRate * epsilonRate;
}

task1(report);
