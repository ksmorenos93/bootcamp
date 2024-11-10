const elements = [1,2,3,4,5,6];
const elements2 = [7,8,9,41,5,6];

let newElements = [...elements];
for (let i = 0; i < elements2.length; i++) {
  const element = elements2[i];
  newElements.push(element);
}
console.log(newElements);

const otherElements = elements.concat(elements2);
console.log(otherElements);

const otherCloneForm = [...elements, ...elements2];

console.log(otherCloneForm);

const otherCloneForm1 = [...elements, 'hola mundo'];
//const otherCloneForm1 = [...elements, ...'hola mundo'];

console.log(otherCloneForm1);