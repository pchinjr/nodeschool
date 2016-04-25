//my first i/o
var fs = require('fs');
var buff = fs.readFileSync(process.argv[2],'utf8').split('\n').length-1; 
console.log(buff);