// const bill = 275;
const bill = 40;
// const bill = 430;
let tip;

// if (bill > 50 && bill < 300) {
//   tip = bill * 0.15;
// } else {
//   tip = bill * 0.2;
// }
// console.log(`tip = ${tip}`);

tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The tips the paid to the restaurant ${tip} when bill ${bill} and the final amount we paid to the retaurant is ${
    bill + tip
  }`
);
