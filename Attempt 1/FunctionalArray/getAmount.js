function getAmount(arr) {
  const totalSum = arr.reduce((total, el) => {
    return total + el.price * el.quantity;
  }, 0);
  return totalSum;
}

let data = [
  { name: "soap", price: 15, quantity: 3 },
  { name: "salt", price: 20, quantity: 5 },
  { name: "sugar", price: 45, quantity: 2 },
];

const totalAmt = getAmount(data);
console.log(totalAmt);
