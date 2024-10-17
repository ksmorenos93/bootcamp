function getMemoryUsage() {
  if (performance.memory) {
    const memoryUsed = performance.memory.usedJSHeapSize;
    console.log(`Memory used: ${memoryUsed} bytes`);
    return memoryUsed;
  } else {
    console.warn('Memory measurement is not supported in this environment.');
    return null;
  }
}

function exampleLinearSpace(n) {
  const startMemory = getMemoryUsage();
  
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }
  
  const endMemory = getMemoryUsage();
  const memoryUsed = endMemory - startMemory;
  
  console.log(`Memory used by exampleLinearSpace(${n}): ${memoryUsed} bytes`);
  return array;
}

exampleLinearSpace(10000);
