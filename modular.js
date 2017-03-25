var myModule = require('./myModule');
var dirName = process.argv[2];
var fileExt = process.argv[3];

myModule(dirName, fileExt, function(err, files) {
  if (err) {
    console.log(err);
  } else {
    files.forEach (function(file) {
    console.log(file);
    });
  }
});


/*

var mymodule = require('./mymodule.js');

    mymodule(process.argv[2], process.argv[3], function(err, data){

        if (err){
            console.log(err)
        }
        else {
            data.forEach(function(file){
            console.log(file)
            });
        }
    });

*/
