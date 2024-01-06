let maxNum = parseInt(prompt("Welcome, Enter Maximium Number"));

while (isNaN(maxNum)) {
  maxNum = prompt("Enter valid Number");
}
console.log(`maxNum : ${maxNum}`);

const targetNum = Math.floor(Math.random() * maxNum) + 1;
console.log(`targetNum : ${targetNum}`);

let guess = prompt("Enter the Guess!!!!  or Press q to  quit");
let attempts = 1;

while (parseInt(guess) != targetNum) {
  if (guess > targetNum) {
    guess = prompt("The guess is too high");
  } else if (guess < targetNum) {
    guess = prompt("The guess is too low");
  } else if (guess == "q") {
    break;
  } else {
    guess = prompt("Enter valid Number");
  }
  attempts++;
}

console.log(`guess : ${guess}`);

if (guess === "q") {
  console.log("you have quit the game");
} else {
  console.log(`YOU BANG in ${attempts} attempts`);
}
