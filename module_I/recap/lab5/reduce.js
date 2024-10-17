const elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let total = 0;
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  total = total + element;
}
console.log(total);

const applyReduce = elements.reduce((total, element) => total + element, 0);

console.log(applyReduce);


