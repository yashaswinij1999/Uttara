function reverseString(str) {
  let s = "";

  for (let i = str.length - 1; i >= 0; i--) {
    s = s + str[i];
  }
  return s;
}
console.log(reverseString("JavaScript Array"));
