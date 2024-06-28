function isPrime(n) {
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

function checkPrime(val) {
  return new Promise((resolve, reject) => {
    if (isPrime(val)) {
      resolve("it is Prime");
    } else {
      reject("its not ");
    }
  });
}

checkPrime(15)
  .then((data) => {
    console.log(data);
    console.log("resolved");
  })
  .catch((error) => {
    console.log(error);
    console.log("oh nooo");
  });
