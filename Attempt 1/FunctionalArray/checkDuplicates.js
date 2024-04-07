function checkDuplicates(arr1, arr2) {
  let arr3 = [...arr1, ...arr2];

  const duplicates = arr3.filter((el, index, arr3) => {
    return arr3.indexOf(el) === index;
  });

  return duplicates;
}

let arr1 = [1, 5, 3];
let arr2 = [4, 5, 6];

console.log(checkDuplicates(arr1, arr2));
