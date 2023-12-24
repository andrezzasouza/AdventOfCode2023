import { calibrationValues } from "./inputForJS.js";

function findSumOfCalibrations(calibrationValues) {
  let sumOfCalibrations = 0;

  for (let i = 0; i < calibrationValues.length; i++) {
    const currentWord = calibrationValues[i];
    const numbersInWord = [];

    for (let j = 0; j < currentWord.length; j++) {
      const isANumber = !isNaN(Number(currentWord[j]));

      if (isANumber) {
        numbersInWord.push(currentWord[j]);
      }
    }

    if (numbersInWord.length > 2) {
      const concatenatedNumber =
        numbersInWord[0] + numbersInWord[numbersInWord.length - 1];
      sumOfCalibrations += Number(concatenatedNumber);
    } else if (numbersInWord.length === 2) {
      const concatenatedNumber = numbersInWord[0] + numbersInWord[1];
      sumOfCalibrations += Number(concatenatedNumber);
    } else if (numbersInWord.length === 1) {
      const concatenatedNumber = numbersInWord[0] + numbersInWord[0];
      sumOfCalibrations += Number(concatenatedNumber);
    }
  }

  return sumOfCalibrations;
}

console.log(findSumOfCalibrations(calibrationValues));
