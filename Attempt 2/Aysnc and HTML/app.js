function getResult(el) {
  const val = el.innerText;
  const div = document.getElementById("text");
  let textVal = `You have clicked on ${val}`;
  div.innerText = textVal;
}

const box = document.getElementById("box");

box.addEventListener("mouseup", () => {
  box.style.backgroundColor = "orange";
});

box.addEventListener("mousedown", () => {
  box.style.backgroundColor = "red";
});
