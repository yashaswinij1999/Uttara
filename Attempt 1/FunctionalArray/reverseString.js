function reverseString(str) {
  let reverse = str.split("");
  lines = "";

  for (let i = reverse.length; i >= 0; i--) {
    console.log(reverse[i]);
    lines += " " + reverse[i];
  }
}

reverseString("JavaScript");
