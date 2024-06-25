function sumSquare(ar) {
  let sum = 0;
  for (let n of ar) {
    sum += n * n;
  }
  return sum;
}

console.log(sumSquare([0, 1, 2, 3, 4]));
console.log(sumSquare([-1, 2, 3, -4, 5]));
