var fs = require('fs');
var path = require('path');
var dirName = process.argv[2];
var fileExt = '.' + process.argv[3];
fs.readdir(dirName, function callback (err, list) {
  if (err) {
    return console.log(err);
  }
  for (var i = 0; i < list.length; i++) {
    if path.extname(list[i]) == fileEXt {
        console.log(list[i]);
    }
  }
});
