var fs = require('fs');
var path = process.argv[2];
var str = fs.readFile(path, 'utf8', function (error, data) {
  console.log(data);
});
str = str.split('\n').length-1;
console.log(str);
