module.exports = function myModule(dirName, fileExt, callback) {
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
}
