//http collect
var http = require('http');
var concatStream = require('concat-stream');

http.get(process.argv[2], function(res){
    res.pipe(concatStream(function(data){
        var characters = data.toString().length;
        console.log(characters);
        console.log(data.toString());
    }));
});