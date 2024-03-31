// const BubbleSort = function (arr) {
//   arr.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     if (a === b) {
//       return 0;
//     }
//   });
//   console.log(arr);
// };

function BubbleSort(arr) {
  const n = arr.length;

  // Outer loop for passes
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    // Inner loop for comparisons
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swaps occur in a pass, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr; // Return the sorted array
}

console.log(BubbleSort([9, 6, 4, 10, 12]));
BubbleSort([69, 58, 6, 98, 15]);
