const elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (let i = 0; i < elements.length; i++) {
  console.log(`value ${elements[i]} of elements array`);
}

elements.forEach(element => {
  console.log(`value ${element} of elements array`);
});