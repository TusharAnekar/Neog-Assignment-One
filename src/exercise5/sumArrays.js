// 5. Write an ES6 function that takes two array of numbers of equal length and returns a new array with the sum of each corresponding element in the two arrays. Avoid using in-built methods.

export const sumArrays = (arrayOne, arrayTwo) => {
  // Your ES6 code here
  const sumArray = [];
  for (
    let i = 0;
    i < (arrayOne.length > arrayTwo.length ? arrayOne.length : arrayTwo.length);
    i++
  ) {
    sumArray.push(arrayOne[i] + arrayTwo[i]);
  }
  return sumArray;
};

console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]
