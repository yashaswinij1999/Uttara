const button = document.querySelector("button");
const div = document.querySelector("div");

button.addEventListener("click", function (e) {
  console.log("button clicked");
  e.stopPropagation();
});

const btn = document.querySelector("#changeColor");

btn.addEventListener("click", function (e) {
  console.log("color changed");
  div.style.backgroundColor = makeRandColor();
  e.stopPropagation();
});

div.addEventListener("click", function () {
  div.classList.toggle("hide");
});

function makeRandColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}
