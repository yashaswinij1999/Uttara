function largestElements(arr, k = 3) {
  let swap = false;
  let temp = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = true;

        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }

      if (!swap) {
        return;
      }
    }
  }
  return arr.slice(arr.length - k);
}

// console.log(
//   largestElements([93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60], 3)
// );

console.log(largestElements([15, 9, 58, 62, 412, 84], 2));
