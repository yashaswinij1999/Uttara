function removeDuplicate(arr) {
  const unique = arr.filter((el, index, arr) => {
    return arr.indexOf(el) === index;
  });
  return unique;
}
console.log(
  removeDuplicate(["apple", "mango", "apple", "orange", "mango", "mango"])
);
