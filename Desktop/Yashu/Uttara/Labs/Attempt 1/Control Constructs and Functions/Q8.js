function maxValue(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([9, 2, 8, 14, 10, 7, 16, 4]));
