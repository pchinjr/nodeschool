//baby steps
var numbers = process.argv.slice(2).map(Number).reduce(function(a,b){return a+b}); //remove the first two indexes, then turn the strings into integers, then sum them all together
console.log(numbers);