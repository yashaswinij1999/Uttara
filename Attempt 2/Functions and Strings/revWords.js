function revWords(str) {
  let s = str.split(" ");

  let words = s.map((el) => el.split("").reverse().join(""));
  return words.join(" ");
}
console.log(revWords("We Love JS"));
