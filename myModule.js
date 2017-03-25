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

module.exports = function (directory,extensionArg,callback){
    var fs = require('fs');
    var path = require('path');
    var extension = '.'+extensionArg;
    fs.readdir(directory, function(err, files){
        var filteredFiles = [];
        if (err)
            {
                callback(err);
            }
        else
        {
            for(i=0;i<files.length; i++){
                if (path.extname(files[i]) === extension) {
                    filteredFiles.push(files[i]);
                }
            }
            callback(null,filteredFiles);
        }
    });
 }

*/
