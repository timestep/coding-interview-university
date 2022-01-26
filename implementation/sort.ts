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
  return array;
}

export {  
  MergeSort,
  Quicksort
}