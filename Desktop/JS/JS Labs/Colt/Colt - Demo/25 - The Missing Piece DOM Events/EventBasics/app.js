//on click

const btn = document.querySelector("#sita");

btn.onclick = function () {
  console.log("rama sita rama sita");
};

const rama = document.querySelector("#rama");

function screem() {
  console.log("hare rama hare ram");
}

rama.onmouseenter = screem;

const h1 = (document.querySelector("h1").onclick = () =>
  alert("Hey Rama Sita"));

const lava = document.querySelector("#lava");
lava.addEventListener("click", function () {
  console.log("hey lava");
});
