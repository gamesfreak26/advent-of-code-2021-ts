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
export const task2 = (diagnosticReport: string[]) => {

  let oxygenGeneratorRating: string[] = diagnosticReport;
  let CO2ScrubberRating: string[] = diagnosticReport;
  let diagnosticReportRecordLength = diagnosticReport[0].length;
  
  for (let j: number = 0; j < diagnosticReportRecordLength; j++) {

    if (j === (diagnosticReportRecordLength - 1)) {
      oxygenGeneratorRating = oxygenGeneratorRating
        .filter(record => record[j] === '1');

      CO2ScrubberRating = CO2ScrubberRating
        .filter(record => record[j] === '0');

      const o2Rating = parseInt(oxygenGeneratorRating[0], 2);
      const c02Rating = parseInt(CO2ScrubberRating[0], 2);

      return o2Rating * c02Rating;
    }

    let digitOnes: number = 0;
    let digitZeroes: number = 0;

    let co2DigitOnes: number = 0;
    let co2DigitZeroes: number = 0;

    diagnosticReport.forEach(line => {
      (line[j] === '1') ? digitOnes++ : digitZeroes++; 
    })

    diagnosticReport.forEach(line => {
      (line[j] === '0') ? co2DigitZeroes++ : co2DigitOnes++; 
    })

    if (digitOnes > digitZeroes) {
      oxygenGeneratorRating = oxygenGeneratorRating
        .filter(record => record[j] === '1');
    }
    else {
      oxygenGeneratorRating = oxygenGeneratorRating
        .filter(record => record[j] === '0');
    }

    if (CO2ScrubberRating.length >= 1) {
      if (co2DigitZeroes < co2DigitZeroes) {
        CO2ScrubberRating = CO2ScrubberRating
          .filter(record => record[j] === '0');
      }
      else if (co2DigitZeroes < co2DigitZeroes) {
        CO2ScrubberRating = CO2ScrubberRating
          .filter(record => record[j] === '1');
      }
    }

  }
}

task2(report);