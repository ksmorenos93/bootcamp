const places = ['house', 'apartment', 'office'];

let isInArray = false;
for (let i = 0; i < places.length; i++) {
  const place = places[i];
  if (place === 'house') {
    isInArray = true;
    break;
  }
}

console.log(isInArray);


const isInArray1 = places.includes('apartment');

console.log(isInArray1);
