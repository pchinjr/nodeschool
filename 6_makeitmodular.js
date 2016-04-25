//make it modular 
    //program.js
var myModule = require('./6a_mymodule.js'); 
var fpath = process.argv[2]; //path
var ftype = process.argv[3]; //file type

var callback = function(err, data) {
    if(err) {
        return console.error(err);
    }
    data.map(function(item){
        console.log(item);
    });
};
myModule(fpath, ftype, callback);