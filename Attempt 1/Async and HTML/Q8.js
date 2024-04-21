const data = fetch("https://fakestoreapi.com/products");

data
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
