module.exports = function myModule(dirName, fileName, function bar (callback) {
  foo (function (err, files) {
    if (err) {
      return callback (err);
    }
    callback (null, files);
  })
}) {
  var fileExt = '.' + fileName;
  fs.readdir (dirName, function(err, files) {
    if (err) {
      return console.log(err);
    }
    files.forEach(function (file) {
      if (path.extname(file) === fileExt) {
        return file;
      }
    })
  });
}

/*

var fs = require("fs");
var firstArg = process.argv[2], secondArg = process.argv[3];

module.exports = function (firstArg, secondArg, callback) {
    fs.readdir(firstArg, function(err, data){
        if(err) return callback(err);
        callback(null, data);
    });
}

*/
