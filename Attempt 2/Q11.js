function isPair(ar, target) {
  const seenNumbers = new Set();

  for (let num of ar) {
    let complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

// Example usage:
const ar1 = [9, 2, 8, 14, 10, 7, 16, 4];
const target1 = 15;
console.log(isPair(ar1, target1)); // Output: true

const ar2 = [9, 2, 8, 14, 10, 7, 16, 4];
const target2 = 8;
console.log(isPair(ar2, target2)); // Output: false
