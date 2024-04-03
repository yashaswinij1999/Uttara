function generatePrime() {
  const primeNumbers = [];

  for (let i = 1; i < 100; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

function isPrime(num) {
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

console.log(generatePrime());
