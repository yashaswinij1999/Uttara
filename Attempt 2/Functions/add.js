function add(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + add(arr.slice(1));
  }
}
console.log(add([1, 4, 7, 9]));
