var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

var server = http.createServer(function (request, response) {
  // request handling logic...
  // check to see if request method is POST
  if (request.method === 'POST') {
    // write request status and conent type to response head
    response.writeHead(200, {'Content-Type': 'text/plain'})
    // stream request to through2-map with pipe()
    request.pipe(map(function (chunk) {
    // convert request to uppercase string
      return chunk.toString().toUpperCase()
      // stream result to response with pipe()
    })).pipe(response)
    } else {
    // write method not allowed error to response header if method not POST
    response.writeHead(405)
    }
}).listen(+port, function() {
  console.log('Server listening on http://localhost:%s', port)
})

/*
In the solution above, we are  assigning the http and through2-map modules to
the variables http and map.  We are also assigning the first argument to
our program to the variable port.

Next, we a create a server and pass a callback function which accepts a
request and response as arguments.  Inside of our callback, we are checking
to see if the method of the request (request.method) sent to our server is
equal to POST.  If it is, we are writing status 200 and the content type to
the response head and piping the request to the map() method.

The map() method is passed a callback which accepts chunk as an argument.
Inside of this callback are returning the value of our chuck, which is
converted to an uppercase string with the toString() and toUpperCase()
methods.  Then we are pining the returned value to the response with the
pipe() method.

If the request method is not equal to POST, we are writing status 405 to
the response head.  Error code 405 is the error code used if a method is
not allowed, such as GET.

Finally, we are listening for the port passed as the first argument to
the program, coercing the port to a number using the unary + operator,
and logging the server location to the console.
*/



/*

official solution:

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
      return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))

## HTTP UPPERCASERER (Exercise 12 of 13)

  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.

  ## HINTS

  While you're not restricted to using the streaming capabilities of the
  request and response objects, it will be much easier if you do.

  There are a number of different packages in npm that you can use to
  "transform" stream data as it's passing through. For this exercise the
  through2-map package offers the simplest API.

  through2-map allows you to create a transform stream using only a single
  function that takes a chunk of data and returns a chunk of data. It's
  designed to work much like Array#map() but for streams:

     var map = require('through2-map')
     inStream.pipe(map(function (chunk) {
       return chunk.toString().split('').reverse().join('')
     })).pipe(outStream)

  In the above example, the incoming data from inStream is converted to a
  String (if it isn't already), the characters are reversed and the result
  is passed through to outStream. So we've made a chunk character reverser!
  Remember though that the chunk size is determined up-stream and you have
  little control over it for incoming data.

  To install through2-map type:

     $ npm install through2-map

  If you don't have an Internet connection, simply make a node_modules
  directory and copy the entire directory for the module you want to use
  from inside the learnyounode installation directory:

  file:///usr/local/lib/node_modules/learnyounode/node_modules/through2-map

  Documentation for through2-map has been installed along with learnyounode
  on your system and you can read them by pointing your browser here:

  file:///usr/local/lib/node_modules/learnyounode/docs/through2-map.html

*/
