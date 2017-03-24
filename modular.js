var myModule = require('./myModule');
var fs = require('fs');
var dirName = process.argv[2];
var fileName = process.argv[3];

myModule(dirName, fileName, callback);
console.log(file);


/*

var module = require('./module');

module(process.argv[2], process.argv[3], function(err, data) {
  if (err) console.error(err);

  data.forEach(function(element) {
    console.log(element);
  });
});

*/
