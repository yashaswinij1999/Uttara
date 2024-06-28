function removeDuplicate(arr1, arr2) {
  arr3 = [...arr1, ...arr2];

  const unique = arr3.filter((el, index, arr3) => {
    return arr3.indexOf(el) === index;
  });
  return unique;
}
console.log(removeDuplicate([1, 5, 3], [4, 5, 6]));
