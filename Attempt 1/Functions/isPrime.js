const isPrime = function (x) {
  if (x === 0 || x === 1) {
    return false;
  }

  if (x === 2 || x === 3 || x === 5 || x === 7) {
    return true;
  }

  if (x % 2 === 0) {
    return false;
  }

  

};

console.log(isPrime(16));
