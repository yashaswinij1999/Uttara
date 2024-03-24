function reverseNum(num) {
  let r = 0;
  let sum = 0;

  while (num != 0) {
    r = num % 10;
    sum = sum * 10 + r;
    num = num / 10;
  }
  return sum;
}

console.log(reverseNum(364));
