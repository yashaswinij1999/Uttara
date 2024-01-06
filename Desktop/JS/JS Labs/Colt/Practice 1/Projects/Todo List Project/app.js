let task = prompt("Enter , what you like to do");
console.log(`task  ${task}`);

const todo = [];

while (task !== "quit") {
  task = prompt("Enter what you like to do");

  if (task === "new") {
    task = prompt("Enter, what you like to add");
    todo.push(task);
    console.log(`task  ${task} added`);
    console.log("*****************************");
  } else if (task === "list") {
    for (let i = 0; i < todo.length; i++) {
      console.log("*****************************");
      console.log(`${i} :${todo[i]}`);
    }
  } else if (task === "delete") {
    let num = parseInt(prompt("Enter Number which you want tot delete"));

    while (isNaN(num)) {
      num = prompt("Invalid number");
    }

    todo.splice(num, 1);
    console.log("*****************************");
    console.log("task deleted");
  }

  console.log("*****************************");
  if (task === "quit") {
    break;
  }
}

if (task === "quit") {
  console.log("YOU QUIT !!!!");
}
