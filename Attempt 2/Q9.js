function reverseNum(num) {
  let r = 0;
  let s = 0;
  while (num > 0) {
    r = num % 10;
    s = s * 10 + r;
    num = Math.floor(num / 10);
  }
  return s;
}
console.log(reverseNum(364));
