"use strict";

function calBMI() {
  BMI = mass / height ** 2;
}

const John = {
  fullName: "John Smith",
  mass: 78,
  height: 1.69,

  calBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const Mark = {
  fullName: "Mark Miller",
  mass: 92,
  height: 1.95,

  calBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(Mark.calBMI());
console.log(John.calBMI());

const higherBMI = function () {
  return Mark.BMI > John.BMI && John.BMI > Mark.BMI
    ? `Mark's BMI ${Mark.BMI} is higher than Mark's ${John.BMI}!`
    : `John's BMI ${John.BMI} is higher than Mark's ${Mark.BMI}!`;
};

console.log(higherBMI());
