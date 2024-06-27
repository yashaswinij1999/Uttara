class University {
  constructor(name, departments) {
    this.name = name;
    this.departments = departments;
  }
  add = function (dept) {
    this.departments.push(dept);
  };
  remove = function (dept) {
    this.departments = this.departments.filter((el) => el !== dept);
    return this.departments;
  };
  display = function () {
    return this.departments;
  };
}

university = new University("banglore", ["science", "kannda"]);
console.log(university.display());
console.log(university.add("medical"));
console.log(university.display());
console.log(university.remove("kannda"));
console.log(university.display());
