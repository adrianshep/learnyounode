var myModule = require('./myModule');
var fs = require('fs');
var dirName = process.argv[2];
var fileName = process.argv[3];

myModule(dirName, fileName, callback);
