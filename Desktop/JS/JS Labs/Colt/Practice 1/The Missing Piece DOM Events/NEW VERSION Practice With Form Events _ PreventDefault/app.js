const form = document.querySelector("form");
const input = document.querySelector("#catname");
const ul = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(input.value);

  while (input.value) {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});
