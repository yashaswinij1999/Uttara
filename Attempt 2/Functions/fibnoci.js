function fibnoci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let temp = 0;
  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}
console.log(fibnoci(0));
console.log(fibnoci(10));
