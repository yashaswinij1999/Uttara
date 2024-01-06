//JavaScript Fundamentals – Part 1
// LECTURE: Values and Variables
/*
const country = "Canada";
const continent = "Asia";
let population = "130";

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types

const isIsland = false;
let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

// LECTURE: let, const and var

language = "english";

// LECTURE: Basic Operators
console.log(`population in each half ${population / 2}`);

population++;
console.log(` ${population}`);

let finPopulation = 6;
console.log(population > finPopulation);

let avgPopulation = 33;
console.log(population < avgPopulation);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

// LECTURE: Strings and Template Literals

// LECTURE: Taking Decisions: if / else Statements

if (population > avgPopulation) {
  console.log(`${country}'s ${population} is above ${avgPopulation}`);
} else {
  console.log(
    `${country}'s ${population} is ${
      avgPopulation - population
    } million below average`
  );
}
// LECTURE: Type Conversion and Coercion
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// LECTURE: Equality Operators: == vs. ===

let numNeighbours = parseInt(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}


// LECTURE: Logical Operators

if (language === "english" && population < 50 && isIsland === false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

// LECTURE: The switch Statemen

switch (language) {
  case ("chinese", "mandarin"):
    console.log("MOST number of native speakers!");
    break;

  case "spanish":
    console.log("2nd place in number of native speakers");
    break;

  case "english":
    console.log("3rd place");
    break;

  case "hindi":
    console.log("Number 4");
    break;

  case "arabic":
    console.log("5th most spoken language");

  default:
    console.log("Great language too");
}

// LECTURE: The Conditional (Ternary) Operator

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below "} average`
);*/

// JavaScript Fundamentals – Part 2
// LECTURE: Functions

/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capitalCity is ${capitalCity}`;
}

const report1 = describeCountry("India", 160, "Delhi");
const report2 = describeCountry("Canada", 10, "Ottawa");
const report3 = describeCountry("Australia", 100, "Canberra");

console.log(report1);
console.log(report2);
console.log(report3);

// LECTURE: Function Declarations vs. Expressions

let worldPopulation = 7900;

const percentageOfWorld1 = function (population) {
  return `${(population / worldPopulation) * 100}`;
};

const delhiReport = percentageOfWorld1(160);
const canadaReport = percentageOfWorld1(10);
const australiaReport = percentageOfWorld1(100);

console.log(delhiReport, canadaReport, australiaReport);

// LECTURE: Arrow Functions

const percentageOfWorld3 = (population) =>
  `${(population / worldPopulation) * 100}`;

const nepalReport = percentageOfWorld3(60);
console.log(nepalReport);

// LECTURE: Functions Calling Other Functions

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld3(population);
  const description = `${country} has ${population} million people which as about ${percentage} of the world`;
  console.log(description);
};

describePopulation("delhi", 160);
describePopulation("canada", 10);
describePopulation("australia", 100);

// LECTURE: Introduction to Arrays

const populations = [13, 21, 46, 67];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

// LECTURE: Basic Array Operations (Methods)

const neighbours = ["nepal", "srilanka", "pakistan", "china"];
neighbours.push("utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("germany")) {
  console.log("Probably not a central European country :D");
}

const indexOf = neighbours.indexOf("china");
neighbours[indexOf] = "Republic of China";
console.log(neighbours);

// LECTURE: Introduction to Objects

const myCountry = {
  country: "India",
  capitalCity: "Delhi",
  language: ["Kannada", "English", "hindi"],
  population: 160,
  neighbours: ["nepal", "srilanka", "pakistan", "china"],
  describe() {
    console.log(
      `${this.country} has ${this.population} million ${this["language"]} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capitalCity}`
    );
  },
  checkIsland() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

// LECTURE: Dot vs. Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry["language"]} speaking people, ${neighbours.length} neighbouring countries and a capital called ${myCountry.capitalCity}`
);

myCountry["population"] += 20;
console.log(myCountry);

myCountry["population"] -= 20;
console.log(myCountry);

// LECTURE: Object Methods
myCountry.checkIsland();

console.log(myCountry);

// LECTURE: Iteration: The for Loop

for (let i = 1; i <= 50; i++) {
  console.log(`Voter ${i} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  const row = listOfNeighbours[i];

  for (let sub of row) {
    console.log(`neighbours: ${sub}`);
  }
}

// LECTURE: The while Loop

const percentages3 = [];

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);*/
