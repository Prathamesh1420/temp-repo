//Modules
//Common js, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./3_firstModule');
//console.log(names);//output is always in object form
const sayHi = require('./4_secModule');
const data = require('./5_alternative');
//console.log(data);//output is always in object form
require('./6_mindGranade');

sayHi('susan');
sayHi(names.peter);
sayHi(names.john);