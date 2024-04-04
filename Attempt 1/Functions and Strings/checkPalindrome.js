function checkPalindrome(str) {
  let i = 0;
  while (i < str.length) {
    if (str[i] === str[str.length - i - 1]) {
      return true;
    } else {
      return false;
    }
    i++;
  }
}

console.log(checkPalindrome("madama"));
