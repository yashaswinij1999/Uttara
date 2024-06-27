function reverseArray(arr) {
  let reverse_Arr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverse_Arr.push(arr[i]);
  }
  return reverse_Arr;
}
console.log(reverseArray([1, 3, 5, 2, 6]));
