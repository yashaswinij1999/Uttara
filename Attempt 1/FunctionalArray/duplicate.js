function duplicate(arr) {
  const getDuplicate = arr.filter((el, index, arr) => {
    return arr.indexOf(el) === index;
  });
  return getDuplicate;
}

let data = ["apple", "mango", "apple", "orange", "mango", "mango"];
console.log(duplicate(data));
