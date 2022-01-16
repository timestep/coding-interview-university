export const binarySearch = (array: Array<number>, targetVal: number): boolean => {
  if(!targetVal || array.length === 0) return false;
  const midPoint = Math.floor(array.length / 2);

  if(array[midPoint] === targetVal) return true;
  if(array[midPoint] > targetVal ) {
    const leftArray = array.splice(0, midPoint)
    return binarySearch(leftArray, targetVal);
  }
  if(array[midPoint] < targetVal) {
    const rightArray = array.splice(midPoint, array.length - 1)
    return binarySearch(rightArray, targetVal)
  }
  
  return false;
}