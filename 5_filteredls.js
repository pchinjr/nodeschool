//filtered ls
var fs = require('fs');
var path = require('path');

var fpath = process.argv[2]; //path
var ftype = process.argv[3]; //file type

var getExt = function (e, list) {
    list.map(function(item) {
        if ('.' + ftype === path.extname(item) ) {
            console.log( item ); 
        } 
    });
};

fs.readdir(fpath, getExt);