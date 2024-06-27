function product(arr) {
  let sum = 1;
  arr.map((el) => {
    sum = sum * el;
  });
  return sum;
}
console.log(product([1, 2, 3, 4, 5]));
