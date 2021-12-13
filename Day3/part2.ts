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
  let recordLength = diagnosticReport[0].length;
  
  for (let j: number = 0; j < recordLength; j++) {

    let o2DigitOnes: number = 0;
    let o2DigitZeroes: number = 0;

    

    oxygenGeneratorRating.forEach(line => {
      (line[j] === '0') ? o2DigitZeroes++ : o2DigitOnes++; 
    })

    if (oxygenGeneratorRating.length > 1) {

      if (o2DigitOnes >= o2DigitZeroes) {
        oxygenGeneratorRating = oxygenGeneratorRating
          .filter(record => record[j] === '1');
      }
      else {
        oxygenGeneratorRating = oxygenGeneratorRating
          .filter(record => record[j] === '0');
      }
    }

    let co2DigitOnes: number = 0;
    let co2DigitZeroes: number = 0;

    CO2ScrubberRating.forEach(line => {
      (line[j] === '0') ? co2DigitZeroes++ : co2DigitOnes++; 
    })

    if (CO2ScrubberRating.length > 1) {
      if (co2DigitZeroes <= co2DigitOnes) {
        CO2ScrubberRating = CO2ScrubberRating
          .filter(record => record[j] === '0');
      }
      else {
        CO2ScrubberRating = CO2ScrubberRating
          .filter(record => record[j] === '1');
      }
    }
  }

  const o2Rating = parseInt(oxygenGeneratorRating[0], 2);
  const c02Rating = parseInt(CO2ScrubberRating[0], 2);

  return o2Rating * c02Rating;
}

task2(report);