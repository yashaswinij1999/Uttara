arr = [9, 2, 8, 14, 10, 7, 16, 4];

function isLarger(arr, key) {
  const outPut = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > key) {
      outPut.push(arr[i]);
    }
  }
  return outPut;
}

console.log(isLarger(arr, 8));
