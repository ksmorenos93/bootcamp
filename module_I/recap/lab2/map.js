const elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let newElements = [];

for (let i = 0; i < elements.length; i++) {
  newElements.push(elements[i]);
}
console.log(elements);
console.log(newElements);

newElements = elements.map(item => item);

console.log(elements);
console.log(newElements);