/* const btn = document
  .querySelector("button")
  .addEventListener("click", function (event) {
    console.log(event);
    // alert("Hey Good Morning");
  });

const input = document.querySelector("input");

// input.addEventListener("keypress", function (evt) {
//   console.log(evt.key);
//   console.log(evt.code);
// });

window.addEventListener("keypress", function (evt) {
  console.log(evt.key);
  console.log(evt.code);
});
*/
// NEW VERSION Form Events _ PreventDefault

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submitted"); //------->it quickly says submitted and goes to dog page
});
