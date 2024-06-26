function isPrime(x) {
  if (x <= 1) {
    return false;
  }
  if (x === 2 || x === 3 || x === 5 || x === 7) {
    return true;
  }
  if (x % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(x); i += 2) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(0));
console.log(isPrime(25));
console.log(isPrime(91));
console.log(isPrime(67));
