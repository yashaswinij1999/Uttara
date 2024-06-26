function table() {
  let table_Arr = [];
  let arr = [];

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      arr.push(`${i * j}`);
    }
    table_Arr.push(arr);
    arr = [];
  }
  return table_Arr;
}
console.log(table());
