var myModule = require('./myModule');
var fs = require('fs');
var dirName = process.argv[2];
var fileExt = process.argv[3];

myModule(dirName, fileExt, function(err, files) {
  if (err) {
    console.log(err);
  }
  files.forEach (function(file) {
    console.log(file);
  });
});


/*

var myModule = require('./myModule');

module(process.argv[2], process.argv[3], function(err, data) {
  if (err) console.error(err);

  data.forEach(function(element) {
    console.log(element);
  });
});

*/
