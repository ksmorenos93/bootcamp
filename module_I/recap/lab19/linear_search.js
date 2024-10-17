/**
 * Time Complexity -> O( n + 3 ) O(n)
 * Spatial Complexity -> O( n )
 * Aux Space -> O( 1 )
 */
function linearSearch(array, key) { // S O(n)
  for (let index = 0; index < array.length; index++) { // T O(n), S O(1)
    if (array[index] === key) { // O(1)
      return index; // O(1)
    }
  }
  return -1; // O(1)
}