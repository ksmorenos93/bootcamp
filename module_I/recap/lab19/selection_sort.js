/**
 * Time Complexity -> O( n * n ) => O(n^2)
 * Spatial Complexity -> O( n + 5 ) => O(n)
 * Aux Space -> O( 1 )
 */
function selectionSort(array) { // S O(n)
  let lng = array.length; // T O(1), S O(1)
  
  for (let i = 0; i < lng; i++) { // T O(n) - S O(1)
    let min = i; // T O(1), S O(1)
    for (let j = i + 1; j < lng; j++) { // T O(n), S O(1)
      if (array[j] < array[min]) { // O(1)
        min = j; // O(1)
      }
    }
    if (min != i) { // T O(1)
      let temp = array[i]; // T O(1), S O(1)
      array[i] = array[min]; // T O(1)
      array[min] = temp; // T O(1)
    }
  }
  return array; // T O(1)
}