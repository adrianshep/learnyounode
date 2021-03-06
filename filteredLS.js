var fs = require('fs');
var path = require('path');
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

/*
official solution:

var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })

*/
