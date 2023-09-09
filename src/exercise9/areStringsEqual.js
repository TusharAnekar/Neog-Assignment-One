// 9. Write an ES6 function that takes two strings as input and determines if they are the same or not.

export const areStringsEqual = (stringOne, stringTwo) => {
  // Your ES6 code here
  return stringOne === stringTwo;
};

console.log(areStringsEqual("Apple", "Apple")); // true
console.log(areStringsEqual("Apple", "apple")); // false
console.log(areStringsEqual("Papaya", "Watermelon")); // false
