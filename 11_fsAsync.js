const { readFile, writeFile } = require("fs");

//we need to provide callback fucntion
console.log("start"); //1
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err); //return error
    return;
  }
  console.log(result); //This return content of file
  const first = result;

  readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err); //return error
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      "here is the result of async",
      {
        flag: "a",
      },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task"); //3
        console.log(result);
      }
    );
  });
});
console.log("starting new task"); //2

//alternatives are promises and async await
