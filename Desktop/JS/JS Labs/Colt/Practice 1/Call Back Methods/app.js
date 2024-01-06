fruits = ["orange", "mango", "pineapple", "guava", "grapes", "strawberry"];

fruits.forEach(function (el) {
  console.log(el);
});

num = [2, 8, 9, 6, 8, 6, 7];
num.forEach(function (el) {
  console.log(el);
});

const evenArr = num.map(function (el) {
  if (el % 2 == 0) {
    return el;
  }
});
console.log(evenArr);
console.log(num);

const doubles = (num) => num * 2;
console.log(doubles(2));

const even = (num) => {
  return num * num;
};
console.log(even(5));

const add = (num1, num2) => num1 + num2;
console.log(add(10, 6));

// console.log("before");
// setTimeout(() => {
//   console.log("In timeOut Function");
// }, 3000);

// const id = setInterval(() => {
//   console.log("hai");
// }, 2000);

const filter = num.filter((num) => {
  return num === 6;
});
console.log(filter);

const movies = [
  { name: "Titanic", year: 1999 },
  { name: "Inception", year: 2009 },
  { name: "Blood Diamond", year: 2001 },
  { name: "pirates of carabean", year: 1990 },
];

movies.forEach(function (movie) {
  console.log(movie);
});

const movieName = movies.map(function (movie) {
  return movie.name;
});
console.log(movieName);

const year = movies.filter(function (movie) {
  return movie.year > 2000;
});
console.log(year);

const numbers = [1, 9, 6, , 4, 8, 16, 58, 94, 75, 36, 65, 8, 46, 27];
console.log(numbers.some((num) => num > 45));

const total = numbers.reduce((total, num) => {
  return (total += num);
});
console.log(total);

const min = numbers.reduce((min, num) => {
  if (num < min) {
    return num;
  }
  return min;
});
console.log(min);

const shiva = {
  name: "shiva",
  fullName() {
    return `${this.name}`;
  },
  add(x, y) {
    console.log(x + y);
  },
};
console.log(shiva.fullName());

function alert() {
  hesaru = prompt("name");
  console.log(this.hesaru + " is calling");
}

// // let flower = prompt("enter flower name");

// console.log(flower);

const Goodmovies = [
  { title: "Amadeus", score: 99 },
  { title: "Stand by Me", score: 85 },
  { title: "Parasite", score: 95 },
  { title: "Alien", score: 90 },
];

const filtered = Goodmovies.filter(({ score }) => score > 95);
console.log(filtered);
