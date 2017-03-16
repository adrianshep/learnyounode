var arr = process.argv;
var sum = 0;
for (var i = 2; i < arr.length; i++) {
  sum = sum + Number(arr[i]);
}
console.log(sum);

/*
Official solution:

var result = 0

    for (var i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }

    console.log(result)
*/
