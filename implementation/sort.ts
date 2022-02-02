const MergeSort = (array: Array<number>): Array<number> => {
  if(array.length === 1) return array;
  const leftArray = array.slice(0, Math.floor(array.length/2))
  const rightArray = array.slice(Math.floor(array.length/2), array.length)    
  const leftMerge = MergeSort(leftArray);
  const rightMerge = MergeSort(rightArray);

  const merge = (leftArray: Array<number>, rightArray: Array<number>): Array<number> => {
    let temp = [];
    let i = 0 //max to leftArray.lenght
    let j = 0 //max to rightArray.length

    while(i < leftArray.length && j < rightArray.length) {
      if(leftArray[i] < rightArray[j]){
        temp.push(leftArray[i])
        i++
      }
      else {
        temp.push(rightArray[j]);
        j++
      }
    }

    while(i <= leftArray.length - 1) {
      temp.push(leftArray[i])
      i++;
    }

    while(j <= rightArray.length - 1) {
      temp.push(rightArray[j])
      j++;
    }
    
    return temp;
  }  


  // find mid of array.
  // take left, and right 
  // then merge sort on them

  return merge(leftMerge, rightMerge);
}

const Quicksort = (array: Array<number>): Array<number> => {
  // not inplace
  // choose pivot
  // check start and end of array to pivot
  // make sure start/end is on right or left of pivot for gt or ls
  // swap if fail
  // iterate from start to end toware middle
  // check
  //  when start/end meet middle
  // split array and sort again.
  let i = 0;

  const partition = (arr: Array<number>) => {
    if(arr.length < 2) return arr;
    const idx = Math.floor(arr.length/2)
    const pivot = arr[idx]
    let lte = 0;
    let gte = arr.length - 1;
  
    while(lte < gte) {
      while(arr[lte] < pivot) {
        if(lte >= idx) break;
        lte++;
      }
      while(arr[gte] > pivot) {
        if(gte <= idx) break;
        gte--;
      }
      if(lte<gte) {
        const swap = arr[lte]
        arr[lte] = arr[gte]
        arr[gte] = swap; 
        lte++;
        gte--;
      }
    }
    return lte;
  }

}

export {  
  MergeSort,
  Quicksort
}