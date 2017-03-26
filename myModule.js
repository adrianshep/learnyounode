module.exports = function (dirName, fileExt, callback) {
  var fs = require('fs');
  var path = require('path');
  fs.readdir(dirName, function(err, files) {
    var arr = [];
    if (err) {
      return callback(err);
    } else {
      for (var i = 0; i < files.length; i++) {
        if (path.extname(files[i]) == '.' + fileExt) {
            arr.push(files[i]);
        }
    }
    callback(null, arr);
    }
  });
}

/*
official solution:

_/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
 on/solution_filter.js_ :


    var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }


*/
