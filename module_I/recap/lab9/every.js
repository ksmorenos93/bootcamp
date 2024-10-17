const elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let isGreaterThan = false;

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  if (element <= 21) {
    isGreaterThan = true;
  }
}ns
console.log(isGreaterThan);

isGreaterThan = false;

const isGreaterThan1 = elements.every(item => item <= 21);

console.log(isGreaterThan1);


const group = [
  {
    name: "Wolverine",
    age: 12,
  },
  {
    name: "Storm",
    age: 8,
  },
  {
    name: "Gambit",
    age: 2,
  },
  {
    name: "Xavier",
    age: 18,
  },
];

const isGreaterThan2 = group
  .map(item => item.age)
  .every(item => item > 18);

console.log(isGreaterThan2);