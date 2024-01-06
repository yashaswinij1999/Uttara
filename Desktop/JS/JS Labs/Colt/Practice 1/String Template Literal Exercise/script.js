/* Strings 
const die1 = Math.floor(Math.random() * 7);
const die2 = Math.floor(Math.random() * 7);
let roll = `die1 : ${die1} and die2 ${die2} the sum of the values : ${
  die1 + die2
} `;

console.log(` roll : ${roll}`);

Conditionals

function isEven(num) {
  if (num % 2 == 0) {
    console.log("even");
  }
}
*/

/*getColor Conditional Exercise*/

function getColor(phrase) {
  if (phrase === "stop") {
    console.log("red");
  } else if (phrase === "slow") {
    console.log("yellow");
  } else if (phrase === "go") {
    console.log("green");
  } else {
    console.log("purple");
  }
}

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102;

// DO NOT TOUCH! (please)
if (num <= 100) {
  if (num >= 50) {
    console.log("HEY!");
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log("YOU GOT ME!");
    }
  }
}

const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];
leaderboard[1] = "Luna";
leaderboard[3] = "Draco";
console.log(leaderboard);

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];
planets.shift("The Moon");
planets.push("Saturn");
planets.unshift("Mercury");
console.log(planets);

const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];

airplaneSeats[3][1] = "Hugo";
console.log(airplaneSeats);

const friends = ["Aamiya", "Punya", "Harshini", "Hamsa"];
const fruits = ["Apple", "Orange", "Mango", "Grapes"];
const merge = friends.concat(fruits);
console.log(merge.splice(1, 1));
console.log(merge);
console.log(merge.sort());

const dog = {
  name: "tommy",
  breed: "lab",
  age: 5,
};

console.log(dog.name);
console.log(dog["age"]);

const product = {
  name: "Gummy Bears",
  inStock: true,
  price: 1.99,
  flavors: ["grape", "apple", "cheery"],
};

const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

const fullAdresss = `${restaurant.address}, ${restaurant.city}, ${restaurant["state"]} ${restaurant.zipcode}`;
console.log(`fulAdress : ${fullAdresss}`);

const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i++) {
  console.log(seatingChart[i]);

  for (let j = 0; j < seatingChart[i].length; j++) {
    console.log(seatingChart[i][j]);
  }
}

for (let i = 50; i >= 0; i -= 10) {
  console.log(i);
}

const str = "Da ba dee da ba daa";

for (let i = 1; i <= 6; i++) {
  console.log(`${i} Da ba dee da ba daa`);
}

for (let i = 25; i >= 0; i -= 5) {
  console.log(`${i}`);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}

for (let sub of people) {
  console.log(sub);
}

const seats = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seats.length; i++) {
  console.log(seats[i]);

  for (let sub of seats[i]) {
    console.log(seats[i], sub);
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num of numbers) {
//   console.log(` the square of ${num * num}`);
// }

let i = 0;
while (i < numbers.length) {
  console.log(numbers[i] * numbers[i]);
  i++;
}

//016 Iterating Over Objects

const Person = {
  nandini: 29,
  Delip: 24,
};

for (let person in Person) {
  console.log(`${person} of age ${Person[person]})`);
}

console.log(Object.keys(Person));
console.log(Object.values(Person));
console.log(Object.entries(Person));

for (let score of Object.values(Person)) {
  console.log(score);
}

const geleyaru = ["asha", "rama", "sita", "nandu"];
console.log(geleyaru);
if (geleyaru.includes("rama")) {
  let i = geleyaru.indexOf("rama");
  geleyaru[i] === null;
}
console.log(geleyaru);

// Functions

function printHeart() {
  console.log("<3");
}

printHeart();

function rant(message) {
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
}

rant("Happy New Year");

function SnakeEyes(input1, input2) {
  if (input1 && input2 === 1) {
    console.log("Snake Eyes");
  } else {
    console.log("Not Snake Eyes!");
  }
}

SnakeEyes(1, 1);
SnakeEyes(1, 5);
SnakeEyes(2, 5);
SnakeEyes(1, 1);

function multiply(input1, input2) {
  return input1 * input2;
}

console.log(multiply(2, 3));
console.log(multiply(9, 9));
console.log(multiply(5, 4));

function isShortWeather(temperature) {
  if (temperature >= 75) {
    return true;
  }
  return false;
}

console.log(isShortWeather(80));
console.log(isShortWeather(48));
console.log(isShortWeather(75));

function lastElement(arr) {
  if (arr.length > 0) {
    return arr[arr.length - 1];
  }
  return null;
}

console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));

function capitalize(input) {
  let first = input.slice(0, 1);
  let capitalize = first.toUpperCase();
  let last = input.slice(1, input.length);
  return capitalize + last;
}
console.log(capitalize("eggplant"));
console.log(capitalize("pamplemousse"));
console.log(capitalize("squid"));

function sumArray(arr) {
  let sum = 0;
  for (let sub of arr) {
    sum += sub;
  }
  return sum;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([50, 50, 1]));

function returnDay(num) {
  while (num != 8) {
    switch (num) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "null";
    }
  }
}

console.log(returnDay(1)); //Monday
console.log(returnDay(7)); //Sunday
console.log(returnDay(4)); //Thursday
console.log(returnDay(0)); //null

const creature = "Common Sea Dragon";

function scubaDive() {
  const creature = "Spanish Dancer"; //A type of sea slug
  console.log(creature);
}

scubaDive();

//Other forms of Functions

// const square = function (num) {
//   return num * num;
// };

// console.log(square(4));
// console.log(square(3));

const square = {
  area: function () {
    return length * length;
  },
  perimeter: function (length) {
    return length * 4;
  },
};

console.log(square.area(10));
console.log(square.perimeter(10));

const hen = {
  name: "Helen",
  eggCount: 0,
  layEgg() {
    this.eggCount += 1;
    return "EGG";
  },
};

console.log(hen.name); // "Helen"
console.log(hen.eggCount); // 0
console.log(hen.layEgg()); // "EGG"
console.log(hen.layEgg()); // "EGG"
console.log(hen.eggCount); // 2

const bird = {
  firstName: "parrot",
  color: "green",
  fly: function (bird) {
    return bird * 1;
  },
  eat: function (fly) {
    return fly;
  },
};

console.log(bird.firstName);
console.log(bird.color);
console.log(bird.fly(2));
console.log(bird.eat(bird.fly(4)));

try {
  console.log(hello.toUpperCase());
} catch (e) {
  console.log(`${e}`);
}

const int = [1, 2, 3, 4, 5, 6];
int.forEach(function (el) {
  if (el % 2 == 0) {
    console.log(el);
  }
});

// const movies = [
//   { title: "Amadeus", score: 99 },
//   { title: "Stand by Me", score: 85 },
//   { title: "Parasite", score: 95 },
//   { title: "Alien", score: 90 },
// ];

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });

const flowers = ["rose", "lotus", "jasmine"];

const flower = flowers.map(function (fl) {
  return fl.toUpperCase();
});

console.log(flower);

const double = int.map(function (num) {
  return num * 2;
});

console.log(double);

// const movieTitles = movies.map(function (movie) {
//   return `${movie.title}`;
// });
// console.log(movieTitles);

const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(function (names) {
  return `${names.first}`;
});
console.log(firstNames);

// function add(x, y) {
//   return x + y;
// }
// console.log(add(1, 2));

// const sum = function (x, y) {
//   return x + y;
// };

// console.log(sum(2, 2));

// const sumify = (x, y) => {
//   return x * y;
// };
// console.log(sumify(2, 5));

// const squaring = (x) => {
//   return x * x;
// };
// console.log(squaring(10));

const rollDie = () => Math.floor(Math.random() * 6) + 1;
console.log(rollDie());

const expression = (name) => `Hey ${name}`;
console.log(expression("Shivani"));
console.log(expression("Niru"));

const add = (a, b) => a + b;

const movies = [
  { title: "Amadeus", score: 99 },
  { title: "Stand by Me", score: 85 },
  { title: "Parasite", score: 95 },
  { title: "Alien", score: 90 },
];

// const firstName = movies.map(function (movie) {
//   return `${movie.title}`;
// });
// console.log(firstName);

const score = movies.map((movie) => `${movie.score}`);
console.log(score);

console.log("Before calling TimeOut");

// setTimeout(() => {
//   console.log("In timeOut");
// }, 3000);

// console.log("After calling TimeOut");

// const id = setInterval(() => {
//   console.log(Math.random() * 10);
// }, 1000);

const values = [9, 8, 6, 5, 4, 3, 2, 1];
// const arr = values.filter((n) => {
//   return n === 4;
// });

const arr = values.filter((n) => {
  return n > 5;
});

console.log(arr);

const newMovies = [
  { title: "Amadeus", score: 99, year: 1984 },
  { title: "Stand by Me", score: 85, year: 2013 },
  { title: "Parasite", score: 95, year: 2004 },
  { title: "Alien", score: 90, year: 1986 },
  { title: "WaterWorld", score: 62, year: 1995 },
  { title: "JingleAllTheWay", score: 71, year: 1996 },
  { title: "Notting Hill", score: 95, year: 2019 },
];

const highRatedMovie = newMovies.filter((movie) => {
  return movie.score > 80;
});
console.log(highRatedMovie);
movies.filter((m) => m.score > 85).map((m) => m.title);

usernames = ["amar", "rama", "lakshana", "hanumantha"];
const validUserNames = (usernames) =>
  usernames.filter((names) => names.length < 10);

console.log(validUserNames(usernames));

const exams = [70, 80, 54, 95, 68, 47, 26, 98];
console.log(exams.some((marks) => marks < 47));
console.log(newMovies.some((m) => m.year > 2015));

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const totals = prices.reduce((total, element) => {
  return total + element;
});
console.log(totals);

const minPrices = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});
console.log(minPrices);

const highestRated = newMovies.reduce((bestMovie, curentMovie) => {
  if (curentMovie.score > bestMovie.highedScore) {
    return curentMovie.score;
  }
  return bestMovie;
});
console.log(highestRated);

// const even = [2, 4, 6, 8, 10];
// const sumTotal = even.reduce((sum, num) => sum + num, 1);
// console.log(sumTotal);

//default value

function sum(a, b = 1) {
  return a + b;
}
console.log(sum(15));

//spread array
const animals = ["cat", "dog", "fish", "lamp"];
const birds = ["sparrow", "duck", "penguin"];

const wildLife = [...animals, ...birds];
console.log(wildLife);

//spread object
const yashu = {
  first: "Yashaswini",
  last: "Jagannath",
  occu: "process Analyst",
};
const dakshu = {
  firstName: "daksh",
  lastName: "Janardhan",
  work: "process Analayst",
};

const employess = { ...dakshu, ...yashu };
console.log(employess);

//rest

function divide(...x) {
  console.log(x);
}
divide(8, 9, 6, 8);

function goldMedals(gold, silver, ...everyone) {
  console.log(
    `Gold medal goes to ${gold} , silver medal goes to ${silver}, everyOne ${everyone}`
  );
}

goldMedals("Rama", "Sita", "lakshamana", "hanuman", "jabuvanta");

const racers = [
  "rama",
  "hanumantha",
  "lakshmana",
  "janaki",
  "krishna",
  "arjuna",
];

// console.log(gold);

// const [gold, silver, bronze, ...others] = racers;

const user = {
  email: "harvey@gmail.com",
  password: "123",
  firstName: "harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Hervey Bernand Milk was an Amercian Politician",
  city: "san Franciso",
  state: "california",
};

const { born: birthyear, martial = "N/A" } = user;

const goodMovies = [
  { title: "Amadeus", score: 99, year: 1984 },
  { title: "Stand by Me", score: 85, year: 2013 },
  { title: "Parasite", score: 95, year: 2004 },
  { title: "Alien", score: 90, year: 1986 },
  { title: "WaterWorld", score: 62, year: 1995 },
  { title: "JingleAllTheWay", score: 71, year: 1996 },
  { title: "Notting Hill", score: 95, year: 2019 },
];

goodMovies.filter((movie) => {
  return movie.score > 90;
});

// here we are passing the paramter as movie in that we are filter score, but in destructing we are passing param as score and returning scores greater than 90, when calling function we are passing object

goodMovies.filter(({ score }) => score > 90);
