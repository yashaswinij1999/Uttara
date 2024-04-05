function Product(arr) {
  const totalProduct = arr.reduce((product, el) => {
    return product * el;
  });
  return totalProduct;
}

console.log(Product([1, 2, 3, 4, 5]));
