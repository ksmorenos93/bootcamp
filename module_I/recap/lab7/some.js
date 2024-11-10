const elements =[1,1,3,1,5];

let isEven = false;

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  if (element % 2 === 0) {
    isEven = true;
    break;
  }
}

console.log(isEven);

const notIsOdd = elements.some(item => item % 2 === 0);

console.log(notIsOdd);