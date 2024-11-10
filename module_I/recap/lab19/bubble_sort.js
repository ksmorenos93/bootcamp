/**
 * Time Complexity -> O( 1 n * n + 1 + 1 + 1 + 1 + 1 ) => O(n^2)
 * Spatial Complexity -> O( n + 5 )
 * Aux Space -> O( 1 )
 */
function bubbleSort(array){ // S O(n)
  let lng=array.length; // T O(1), S O(1)
  for(let i=0;i<lng;i++) { // T O(n), S O(1)
    for(let j=0;j<lng;j++) { // T O(n) , S O(1)
      if(array[j]>array[j+1]){ // T O(1)
        let temp=array[j];array[j]=array[j+1]; // T O(1) , S O(1)
        array[j+1]=temp; // T O(1)
      }
    }
  }
  return array; // O(1)
}