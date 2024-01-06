const form = document.querySelector("form");
const product = form.elements.product;
const qty = form.elements.qty;
const ul = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submitted");
  addLists(product, qty);
});

function addLists(product, qty) {
  const list = document.createElement("li");
  listName = `${qty.value} ${product.value} `;
  console.log(listName);
  list.innerText = listName;
  ul.appendChild(list);
  product.value = "";
  qty.value = "";
}
