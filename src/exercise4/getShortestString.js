// 4. Write an ES6 function that takes an array of strings and returns the shortest string in the array.

export const getShortestString = (strArray) => {
  // Your ES6 code here
  let shortestString = strArray[0];
  for (let i = 1; i < strArray.length; i++) {
    if (shortestString.length > strArray[i].length) {
      shortestString = strArray[i];
    }
  }
  return shortestString;
};

console.log(getShortestString(["primary", "secondary", "education", "exams"])); // exams
