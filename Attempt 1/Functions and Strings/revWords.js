function revWords(str) {
  split = str.split(" ");
  console.log(split);

  // let string = "";
  // for (let i = 0; i < split.length; i++) {
  //   let word = split[i];

  //   for (let j = word.length - 1; j >= 0; j--) {
  //     string += word[j];
  //     console.log(string);
  //   }
  // }

  const sentence = split.map((el) => {
    return el.split("").reverse().join(" ");
  });
  console.log(sentence);
}
revWords("We love JS");
