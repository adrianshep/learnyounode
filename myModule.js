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

    function bar (callback) {
           foo(function (err, files) {
             if (err)
               return callback(err) // early return

             // ... no error, continue doing cool things with `data`

             // all went well, call callback with `null` for the error argument

             callback(null, files)
           })
         }

*/
