const h3 = document.querySelector("h3");
const button = document.querySelector("button");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

button.addEventListener("click", (e) => {
  e.preventDefault();
  value = fname.value + " " + lname.value;

  if (value) {
    h3.innerText = "Welcome" + " " + value;
  } else {
    h3.innerText = "Welcome";
  }
});
