const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calTip = function (bills) {
  return bills > 50 && bills < 300 ? bills * 0.15 : bills * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(`tips = ${tips}`);
console.log(`totals = ${totals}`);

const calAvg = function (arr) {
  let sum;
  let avg;

  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // sum = sum + arr[i]
  }
  avg = sum / arr.length;
  return avg;
};

const avg = calAvg(totals);
console.log(`avg = ${avg}`);


