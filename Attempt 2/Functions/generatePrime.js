function generatePrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2 || n === 3 || n === 5 || n === 7) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function checkPrime() {
  let prime_Arr = [];

  for (let i = 1; i <= 100; i++) {
    if (generatePrime(i)) {
      prime_Arr.push(i);
    }
  }
  return prime_Arr;
}
console.log(checkPrime());
