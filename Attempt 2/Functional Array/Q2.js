function calTotalAmount(arr) {
  return arr.reduce((total, el) => total + el.quantity * el.price, 0);
}
let obj_Arr = [
  { name: "soap", price: 15, quantity: 3 },
  { name: "salt", price: 20, quantity: 5 },
  { name: "sugar", price: 45, quantity: 2 },
];
console.log(calTotalAmount(obj_Arr));
