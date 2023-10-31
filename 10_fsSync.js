const { readFileSync, writeFileSync } = require("fs");
//This is same as
// const fs = require('fs');
// fs.readFileSync();
// fs.writeFileSync();

console.log("start");
//need to provide 2 parameter path and encoding
const first = readFileSync("./content/first.txt", "utf-8");
console.log(first);
const second = readFileSync("./content/second.txt", "utf-8");
console.log(second);

//if file is not present then node will auto create it
//if present it will overwrite it
//to append the text add third prop flag ie {flag: 'a'}
writeFileSync("./content/result-sync.txt", "here is the result", { flag: "a" });

console.log("done with the task");
console.log("starting with next one");
