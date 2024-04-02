function tableArray() {
  let tables = [];

  for (let i = 1; i <= 3; i++) {
    let value = [];
    for (let j = 1; j <= 10; j++) {
      let product = i * j;
      value.push(product);
    }
    tables.push(value);
  }

  return tables;
}

console.log(tableArray());
