const path = require('path')

//path seperator
console.log(path.sep);

//file path
const filePath = path.join('/content/subfolder/test.txt')
console.log(filePath);

//base file or folder name ie test.txt
const base = path.basename(filePath)
console.log(base)

//point the directory 
const absolute =path.resolve(__dirname)
console.log(absolute)