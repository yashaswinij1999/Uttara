"use strict";

let tip;

function calTip(bill) {
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  return tip;
}

calTip(100);
console.log(calTip(100));

let bills = [125, 555, 44];
let tips = [];

const tip1 = calTip(125);
tips.push(tip1);

const tip2 = calTip(555);
tips.push(tip2);

const tip3 = calTip(44);
tips.push(tip3);

console.log(tips);

let total = [];
total.push(bills[0] + tips[0]);
total.push(bills[1] + tips[1]);
total.push(bills[2] + tips[2]);
console.log(total);
