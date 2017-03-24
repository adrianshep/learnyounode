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

module.exports = function (dirname, extension, callback) {
    var fs = require('fs');
    var path = require('path');
    var dir = dirname;
    var arr = [];

    function filter(data, ext) {
        for (var x in data) {
            if (path.extname(data[x]) === '.' + ext) {
                arr.push(data[x]);
            }
        }
        return arr;
    }

    var doSomething = function (err, data) {
        if (err) throw err;
        var mitt = filter(data, extension);
        if (err) throw callback(err);
        callback(null, mitt);
    };

    fs.readdir(dir, function (err, data) {
        if (err) {
            return callback(err);
        };
        doSomething(err, data);
    });
};

*/

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
