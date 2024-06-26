function samePatterns() {
  for (let i = 1; i <= 5; i++) {
    for (let i = 1; i <= 5; i++) {
      let s = " " + i;
      console.log(s);
    }
  }
}
// samePatterns();

function increasingPattern() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
  }
}
// increasingPattern();

function decreasingPattern() {
  for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
  }
}
decreasingPattern();
