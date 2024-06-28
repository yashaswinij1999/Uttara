const form = document.querySelector("form");
const input = document.querySelector("input");
const ol = document.querySelector("ol");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = input.value;
  const li = document.createElement("li");
  li.innerText = val;
  ol.appendChild(li);
  input.value = "";
});
