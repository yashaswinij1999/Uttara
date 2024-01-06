const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", colorise);
}

const h1 = document.querySelectorAll("h1");

for (let h of h1) {
  h.addEventListener("click", colorise);
}

function colorise() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}
