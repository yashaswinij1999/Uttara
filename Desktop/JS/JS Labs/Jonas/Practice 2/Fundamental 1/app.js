// JavaScript Fundamentals – Part 1
//  Coding Challenge #1

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI ? true : false;
console.log(markHigherBMI);

// Coding Challenge #2

if (markBMI > johnBMI) {
  console.log(`Marks BMI ${markBMI} is higher than John's`);
} else {
  console.log(`John BMI ${johnBMI} is higher than Mark's`);
}

// Coding Challenge #3

/*
dolAvg = (96 + 108 + 89) / 3;
koLAvg = (88 + 91 + 110) / 3;

if (dolAvg > koLAvg) {
  console.log("dolphins wins the game");
} else if (koLAvg > dolAvg) {
  console.log("koalas wins the game");
} else {
  console.log("both the team wins");
}

dolAvg1 = (97 + 112 + 101) / 3;
koLAvg1 = (109 + 95 + 123) / 3;
const minimumScore = 100;

if (dolAvg1 > koLAvg1 && dolAvg1 > minimumScore) {
  console.log(`dolphins ${dolAvg1} wins the game`);
} else if (koLAvg1 > dolAvg1 && koLAvg1 > minimumScore) {
  console.log(`koalas ${koLAvg1} wins the game`);
} else {
  console.log("both the team wins");
}

dolAvg2 = (97 + 112 + 101) / 3;
koLAvg2 = (109 + 95 + 106) / 3;
const minimumScore = 100;

if (dolAvg2 > koLAvg2 && dolAvg2 > minimumScore) {
  console.log("dolphins wins the game");
} else if (koLAvg2 > dolAvg2 && koLAvg2 > minimumScore) {
  console.log("koalas wins the game");
} else {
  console.log("both the team wins");
}*/

// Coding Challenge #4

let bill = 430;

const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill},the tip was ${tip} and the total value ${bill + tip}`
);

// JavaScript Fundamentals – Part 2

const calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;

const dolAvg = calcAverage(85, 54, 41);
const koLAvg = calcAverage(23, 34, 27);

function checkWinner(dolAvg, koLAvg) {
  if (dolAvg > 2 * koLAvg) {
    console.log(`dolphins wins ${dolAvg} v/s ${koLAvg}`);
  } else if (koLAvg > 2 * dolAvg) {
    console.log(`koals wins ${koLAvg} v/s ${dolAvg}`);
  } else {
    console.log("no one wins");
  }
}
checkWinner(dolAvg, koLAvg);

// Coding Challenge #2

const calTip = (bill) => {
  const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

const tips = calTip(100);
console.log(tips);

const bills = [125, 555, 44];

const tipsVal = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
console.log(tipsVal);

const total = [
  bills[0] + tipsVal[0],
  bills[1] + tipsVal[1],
  bills[2] + tipsVal[2],
];
console.log(total);

// Coding Challenge #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calBMI() {
    this.bMI = this.mass / this.height ** 2;
    return this.bMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calBMI() {
    this.bMI = this.mass / this.height ** 2;
    return this.bMI;
  },
};

mark.calBMI();
john.calBMI();

if (mark.bMI > john.bMI) {
  console.log(`Mark's BMI ${mark.bMI} is higher than John's ${john.bMI}!`);
} else {
  console.log(`John's BMI ${john.bMI} is higher than John's ${mark.bMI}!`);
}

// Coding Challenge #4

const bil = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipValue = [];
const totalValue = [];

for (let i = 0; i < bil.length; i++) {
  tipValue.push(calTip(bil[i]));
  totalValue.push(tipValue[i] + bil[i]);
}
console.log(tipValue);
console.log(totalValue);

let sum = 0;
let avg = 0;

const calcAverageVal = (arr) => {
  for (let val of arr) {
    sum += val;
  }
  avg = sum / arr.length;
  return avg;
};

console.log(calcAverageVal(totalValue));
