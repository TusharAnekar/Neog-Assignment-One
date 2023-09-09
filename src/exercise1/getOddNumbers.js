// 1. Write an ES6 function that takes an array of numbers and returns a new array with only the odd numbers.

export const getOddNumbers = (numArray) => {
  // Your ES6 code here
  const oddNumbersArray = [];
  for (let i = 0; i < numArray.length; i++) {
    if (!(numArray[i] % 2 === 0)) {
      oddNumbersArray.push(numArray[i]);
    }
  }
  return oddNumbersArray;
};

console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13])); // [7, 3, 9, 13]
