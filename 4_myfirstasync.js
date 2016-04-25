//my first async i/o
var fs = require('fs');
var read = fs.readFile(process.argv[2],'utf8', function(e, data){
    console.log(data.split('\n').length-1);
});