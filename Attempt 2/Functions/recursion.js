function recursion(i) {
  if (i > 100) {
    return;
  } else {
    console.log(i);
    i++;
    recursion(i);
  }
}
recursion(1);
