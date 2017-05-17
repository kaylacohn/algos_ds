function isPairPresent(array, sum) {
  left = 0;
  right = array.length-1;

  while(left < right) {
    if (array[left] + array[right] === sum) {
      return true;
    } else if (array[left] + array[right] > sum) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return false;
}
