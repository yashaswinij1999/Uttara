function largerThan(ar, key) {
  const larArr = ar.filter((el) => el > key);
  return larArr;
}
console.log(largerThan([9, 2, 8, 14, 10, 7, 16, 4], 8));
