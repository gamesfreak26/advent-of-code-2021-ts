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

// Find the oxygen rating and Co2 Scrubber Rating.
const task2 = (diagnosticReport: string[]) => {

  let diagnosticReportRecordLength = diagnosticReport[0].length;
  
  let digitOnes: number[] = new Array(
    diagnosticReportRecordLength
  ).fill(0);

  let digitZeroes: number[] = new Array(
    diagnosticReportRecordLength
  ).fill(0);

  diagnosticReport.map((record: string) => {
      for(let k = 0; k < 1; k++) {
        ( record[k] === '1' ) ? digitOnes[k]++ : digitZeroes[k]++;
      }
    });

  let filteredDiagnosticReport: string[] = []

  for (let i = 0; i < diagnosticReportRecordLength; i++) {

    if (filteredDiagnosticReport.length === 1) {
      break;
    }

    if (digitOnes[i] >= digitZeroes[i]) {
      filteredDiagnosticReport = filteredDiagnosticReport.filter(record => record[i] === '1')
    } else {
      filteredDiagnosticReport = filteredDiagnosticReport.filter(record => record[i] === '0')
    }

    
  }

  const a = 5;
}

task2(report);