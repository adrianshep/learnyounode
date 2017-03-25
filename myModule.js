var fs = require('fs');
var path = require('path');
var arr = [];

module.exports = function (dirName, fileExt, callback) {
  fs.readdir(dirName, function(err, files) {
    if (err) {
      return callback(err);
    }
    callback(null, files);
    for (var i = 0; i < files.length; i++) {
      if (path.extname(files[i]) == '.' + fileExt) {
          arr.push(files[i]);
      }
    }
  });
}

/*

for (var i = 0; i < list.length; i++) {
  if (path.extname(list[i]) == fileExt) {
      console.log(list[i]);
  }
}

files.forEach(function(d) {
  if (path.extname(d) == '.' + fileExt) {
    console.log(d);
  }
});

*/

/*

var fs = require('fs');
var firstArg = process.argv[2], secondArg = process.argv[3];

module.exports = function (firstArg, secondArg, callback) {
    fs.readdir(firstArg, function(err, data){
        if(err) return callback(err);
        callback(null, data);
        list.forEach(function(d){
        if (path.extname(d) == '.' +secondArg) console.log(d);
    });
    });
}

*/
