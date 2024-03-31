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

  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false; // If x is divisible by any number, it is not prime
    }
  }
  return true;
};

console.log(isPrime(99));
