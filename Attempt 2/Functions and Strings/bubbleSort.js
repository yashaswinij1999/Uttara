function bubbleSort(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr.slice(0, 3);
}
console.log(bubbleSort([93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60]));
