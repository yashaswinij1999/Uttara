class University {
  constructor(name, dpt) {
    (this.name = name), (this.dpt = dpt);
  }

  add(dept) {
    if (!this.dpt.includes(dept)) {
      this.dpt.push(dept);
      console.log(`department ${dept} added sucessfully`);
    } else {
      console.log("deparment already exists");
    }
  }

  remove(dept) {
    let index = this.dpt.indexOf(dept);

    if (index !== -1) {
      this.dpt = this.dpt.splice(index, 1);
      console.log(`the department ${dept} removed successfully`);
    } else {
      console.log("department doesnt exists");
    }
  }

  display() {
    if (this.dpt.length === 0) {
      console.log(`no departments found in ${this.name}`);
    } else {
      this.dpt.forEach((element, index) => {
        console.log(`${index + 1} ${element}`);
      });
    }
  }
}

data = [];
banglore = new University("Bangalore", data);
console.log(banglore.name);
banglore.add("science");
banglore.add("social");
console.log(banglore.dpt);
banglore.add("kannada");
console.log(banglore.dpt);
banglore.display();
