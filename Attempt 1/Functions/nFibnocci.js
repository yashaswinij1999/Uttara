function nFibnocci(n) {
  let f = 0;
  let s = 1;
  let r = 0;

  for (let i = 0; i < n; i++) {
    r = f + s;
    console.log(r);
    f = s;
    s = r;
  }
}

nFibnocci(8);
