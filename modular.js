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

official solution:

 _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
 on/solution.js_ :


    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })

*/
