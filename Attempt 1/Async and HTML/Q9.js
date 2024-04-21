function isPrime(num) {
  if (num < 2) {
    return false;
  } else if (num === 2 || num === 3 || num === 5 || num === 7) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function checkPrime(num) {
  return new Promise((resolve, reject) => {
    if (isPrime(num)) {
      resolve("the number is prime");
    } else {
      reject("Its not prime");
    }
  });
}

checkPrime(6)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
