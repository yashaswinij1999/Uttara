const welcome = (name) => `welcome ${name}`;

const fareWell = (name) => `bye ${name}`;

const greeting = function (name, callback) {
  return callback(name);
};

console.log(greeting("rama", welcome));
console.log(greeting("rama", fareWell));
