let p = new Promise(function (resolve, reject) {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then(function (message) {
  console.log("This is in the then " + message);
}).catch(function (message) {
  console.log("This is in the catch " + message);
});
