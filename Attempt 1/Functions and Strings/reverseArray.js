function reverseArray(arr) {
  let output = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }
  return output;
}

console.log(reverseArray([1, 3, 5, 2, 6]));
