const button = document.querySelector("#btn");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  document.body.style.backgroundColor = makeRandColor();
});

function makeRandColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  h1.innerText = `rgb (${r},${g},${b})`;
  return `rgb(${r},${g},${b})`;
}
