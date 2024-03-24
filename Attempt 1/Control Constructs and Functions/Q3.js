function squareSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sqaure = arr[i] * arr[i];
    sum += sqaure;
  }
  return sum;
}

console.log(squareSum([-1, 2, 3, -4, 5]));
