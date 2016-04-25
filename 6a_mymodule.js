    //mymodule.js
var fs = require('fs');
var path = require('path');

module.exports = function(dirName, extension, callback) {
    
    fs.readdir(dirName, function(err, list) {
        var array = [];
        if(err) {
            return callback(err);
        }
        list.map(function(item) {
            if ('.' + extension === path.extname(item)) {
                array.push(item);
            }
        });
        callback(null, array);
    });
};