function greater(n1, n2) {
  let max = 0;

  if (n1 > n2) {
    max = n1;
  } else {
    max = n2;
  }
  return max;
}
console.log(greater(4, 8));
console.log(greater(5, 5));
