const count = items => {
  for (let i = 0; i < items; i++) {
    console.log(i);
  }
}

console.time("Time");
count(5);
console.timeEnd("Time");