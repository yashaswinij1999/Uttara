function greeting(name, callBack) {
  return callBack(name);
}

function welCome(name) {
  console.log("Welcome ", name);
}

function fareWel(name) {
  console.log("Good Bye ", name);
}

greeting("Rama", welCome);
greeting("Sita", fareWel);
