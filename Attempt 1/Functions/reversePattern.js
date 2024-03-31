const reversePattern = function () {
  for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = 5; j >= i; j--) {
      line += "*";
    }
    console.log(line);
  }
};

reversePattern();
