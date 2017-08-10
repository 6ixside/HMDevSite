var http = require('http'),
	fs = require('fs');

var server = express();
server.use(express.static(path.join(__dirname, 'css')));

/*http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);*/
//app.use(express.static(__dirname + '/public'));
console.log(__dirname);

http.createServer(function(req, res){
    fs.readFile('../index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });

    fs.readFile('../css/styles.css', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/css','Content-Length':data.length});
      res.write(data);
      res.end();
    });

}).listen(8080);