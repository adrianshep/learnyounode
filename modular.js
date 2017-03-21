var fs = require('fs');
var path = require('path');
var myModule = require('./myModule.js');

console.log(myModule(dirName, function(err, list) {
  if (err) {
    return console.log(err);
  }
  myModule();
}));

var dirName = process.argv[2];
var fileExt = '.' + process.argv[3];
fs.readdir(dirName, function(err, list) {
  if (err) {
    return console.log(err);
  }
  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) == fileExt) {
        console.log(list[i]);
    }
  }
});
