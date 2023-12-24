import { calibrationValues } from "./inputForJS.js";
import { writtenNumbers, writtenNumbersAsNumbers } from "./helpers.js";

function transformWrittenNumberIntoNumber(writtenNumber) {
  return writtenNumbersAsNumbers[writtenNumber];
}

function findSumOfCalibrationsWithWords(calibrationValues) {
  let sumOfCalibrations = 0;

  for (let i = 0; i < calibrationValues.length; i++) {
    const currentWord = calibrationValues[i];
    const numbersInWord = {};

    for (let writtenNumber of writtenNumbers) {
      const hasWrittenNumber = currentWord.includes(writtenNumber);

      if (hasWrittenNumber) {
        const firstIndexOfWrittenNumber = currentWord.indexOf(writtenNumber);
        const lastIndexOfWrittenNumber = currentWord.lastIndexOf(writtenNumber);

        numbersInWord[firstIndexOfWrittenNumber] = writtenNumber;

        if (firstIndexOfWrittenNumber !== lastIndexOfWrittenNumber) {
          numbersInWord[lastIndexOfWrittenNumber] = writtenNumber;
        }
      }
    }

    for (let j = 0; j < currentWord.length; j++) {
      const currentCharacter = currentWord[j];
      const isANumber = !isNaN(Number(currentCharacter));

      if (isANumber) {
        numbersInWord[j] = currentCharacter;
      }
    }

    const orderedKeysInNumbersInWord = Object.keys(numbersInWord).sort(
      (a, b) => a - b
    );
    const sizeOfNumbersInWord = orderedKeysInNumbersInWord.length;

    if (sizeOfNumbersInWord >= 2) {
      let firstItemInOrderedNumbersInWord =
        numbersInWord[orderedKeysInNumbersInWord[0]];
      let secondItemInOrderedNumbersInWord =
        numbersInWord[
          orderedKeysInNumbersInWord[orderedKeysInNumbersInWord.length - 1]
        ];

      const isFirstItemANumber = !isNaN(
        Number(firstItemInOrderedNumbersInWord)
      );
      const isSecondItemANumber = !isNaN(
        Number(secondItemInOrderedNumbersInWord)
      );

      if (!isFirstItemANumber) {
        firstItemInOrderedNumbersInWord = transformWrittenNumberIntoNumber(
          firstItemInOrderedNumbersInWord
        ).toString();
      }

      if (!isSecondItemANumber) {
        secondItemInOrderedNumbersInWord = transformWrittenNumberIntoNumber(
          secondItemInOrderedNumbersInWord
        ).toString();
      }

      const concatenatedNumber =
        firstItemInOrderedNumbersInWord + secondItemInOrderedNumbersInWord;

      sumOfCalibrations += Number(concatenatedNumber);
    } else if (sizeOfNumbersInWord === 1) {
      let singleItemInOrderedNumbersInWord =
        numbersInWord[orderedKeysInNumbersInWord[0]];

      const isSingleItemANumber = !isNaN(
        Number(singleItemInOrderedNumbersInWord)
      );

      if (!isSingleItemANumber) {
        singleItemInOrderedNumbersInWord = transformWrittenNumberIntoNumber(
          singleItemInOrderedNumbersInWord
        ).toString();
      }

      const concatenatedNumber =
        singleItemInOrderedNumbersInWord + singleItemInOrderedNumbersInWord;
      sumOfCalibrations += Number(concatenatedNumber);
    }
  }
  return sumOfCalibrations;
}

console.log(findSumOfCalibrationsWithWords(calibrationValues));
