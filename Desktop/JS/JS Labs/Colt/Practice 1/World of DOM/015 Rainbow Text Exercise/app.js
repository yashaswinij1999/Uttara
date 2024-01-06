const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let kamana = document.querySelectorAll("span");

for (let kam of kamana) {
  for (let color of colors) {
    console.log(kam[color]);
  }
}
