// 10. Write an ES6 function that takes an array of objects, each with name and age properties, and returns an array containing the names of all people whose age is greater than or equal to 60. Avoid using in-built methods.

export const getNamesOfAdults = (people) => {
  // Your ES6 code here
  const namesOfAdultsAgeGreaterThan60 = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 60) {
      namesOfAdultsAgeGreaterThan60.push(people[i].name);
    }
  }
  return namesOfAdultsAgeGreaterThan60;
};

const people = [
  { name: "Alice", age: 69 },
  { name: "Bob", age: 47 },
  { name: "Charlie", age: 70 }
];
console.log(getNamesOfAdults(people)); // ["Alice", "Charlie"]
