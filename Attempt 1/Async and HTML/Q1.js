let promise = new Promise((resolve, reject) => {
  const x = Math.random() * 20;

  setTimeout(() => {
    if (x > 10) {
      resolve("congrats");
    } else {
      reject("failure");
    }
  });
});

promise.then((data) => console.log(data)).catch((error) => console.log(error));
