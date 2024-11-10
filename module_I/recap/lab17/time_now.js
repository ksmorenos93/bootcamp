const performance = require("perf_hooks");

const count = items => {
  for (let i = 0; i < items; i++) {
    console.log(i);
  }
}

let start = performance.performance.now();
count(5);
let end = performance.performance.now();
let durationInTime = end - start;

console.log(`Time ${durationInTime}ms.`);