class University {
  constructor(name, dpt) {
    (this.name = name), (this.dpt = dpt);
  }

  add(dept) {
    if (this.dpt.includes(dept)) {
      console.log("deparment already exists");
    } else {
      this.dpt.push(dept);
      console.log(`department ${dept} added sucessfully`);
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
    console.log(this.dpt);
  }
}

banglore = new University("Bangalore", ["science"]);
console.log(banglore.name);
console.log(banglore.dpt);
banglore.add("social");
banglore.add("maths");
