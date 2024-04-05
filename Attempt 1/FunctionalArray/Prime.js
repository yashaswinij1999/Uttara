function Prime() {
  let num = [];

  for (let i = 1; i <= 100; i++) {
    num.push(i);
  }

  function checkPrime(num) {
    if (num < 2) {
      return false;
    }

    if (num === 2 || num === 3 || num === 5 || num === 7) {
      return true;
    }

    if (num % 2 === 0) {
      return false;
    }

    for (let i = 3; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const isPrime = num.filter(checkPrime);
  return isPrime;
}

console.log(Prime());
