let panadava = "arjuna";
console.log(panadava);

let multiLineString = "This is a multi-line\nstring.";
console.log(multiLineString);

let indentedString = "This is an indented\tstring.";
console.log(indentedString);

let backslashString = "This is a string with a backslash: \\";

console.log(backslashString);

let singleQuoteString = "This string contains a single quote (').";
let doubleQuoteString = 'This string contains a double quote (").';
console.log(singleQuoteString);

let rollDice = Math.floor(Math.random() * 7);

console.log(rollDice);

//uppercase,lowercase,trim,concat,slice,search,indexof,replace

//arithmetic,comparative,logical,conditional
//arithmetic = +,-,*,/
//comparative = >,<,>=,>=,===,!==,

//push,unshift,pop,shift,indexof,includes,join,reverse,sort,concat,slice,splice

const shiva = {
  name: "mahadeva",
  place: "himalaya",
};

let int = [1, 2, 3, 6, 5, 4, 7];

for (let i = 0; i < int.length; i++) {
  console.log(int[i]);
}

let names = ["amar", "daksu", "manju", "harshi", "nirupa", 1];

// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

for (let i = 0; i < names.length; i++) {
  if (typeof names[i] === "string") continue;
  console.log(names[i]);
}

for (let name of names) {
  console.log(name);
}
const daksu = {
  firstName: "dakshini",
  lastName: "janardhan",
  job: "analyst",
  birthYear: 2000,
  age(currentYear, birthYear) {
    return currentYear - this.birthYear;
  },
};

const age = daksu.age;

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

for (let row of magicSquare) {
  let sum = 0;

  for (let num of row) {
    sum += num;
  }
  console.log(`the row ${row} sum to ${sum}`);
}

function eat(food) {
  console.log(`A man can eat ${food}`);
}

eat("rice");

function eat(food, water) {
  console.log(`A ma can eat ${food} and drink ${water}`);
}
eat("chips", "juice");

function add(x, y) {
  let sum = x + y;
  return sum;
}

const sum = add(4, 5);
console.log(sum);

try {
  console.log(hello.toUpperCase());
} catch (error) {
  console.log(error);
}

console.log(daksu.age(2024));

const greet = () => `hey rama`;
// console.log(greet);

function shout(greet) {
  console.log(greet);
  console.log(greet);
}
shout(greet);

function guess() {
  let num = Math.random();

  if (num > 0.5) {
    return function () {
      console.log("Hare Rama");
      console.log("Hare Rama");
    };
  } else {
    return function () {
      console.log("Hare Krishna");
      console.log("Hare Krishna");
    };
  }
}

const slogan = guess();
console.log(slogan());

// function decide(num) {
//   return num >= 20 && num <= 30;
// }
// console.log(decide(21));

function makeMystery(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
const dilemma = makeMystery(10, 20);
console.log(dilemma(21));

int = [1, 2, 3, 6, 5, 4, 7];

// int.forEach(function (n) {
//   console.log(n * 2);
// });

// const evenNum = int.map(function (n) {
//   const even = n % 2 == 0;
//   return even;
// });
// console.log(evenNum);

// let filtered = int.filter(function (n) {
//   return (n = n % 2 == 0);
// });
// console.log(filtered);

// console.log(int.some((n) => n % 2 == 0));

const squares = (num) => {
  return num ** 2;
};

// console.log("before");
// setTimeout(() => {
//   console.log("Hurray!!!!");
// }, 5000);

// console.log("after");

const total = int.reduce((totals, num) => (totals = totals + num));
//spread arrays,object,destructing arraws and object and rest

function addify(...values) {
  let sum = 0;
  for (let val of values) {
    sum += val;
  }
  return sum;
}

const max = addify(1, 2, 3, 2, 5, 9);
console.log(max);

const employess = [
  { name: "amar", age: 28, tenure: 4 },
  { name: "yeashu", age: 24, tenure: 3 },
  { name: "dakshu", age: 23, tenure: 1 },
  { name: "manju", age: 26, tenure: 1 },
];
