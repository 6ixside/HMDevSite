var http = require('http'),
    express = require('express'),
	  fs = require('fs');

var dir = 'C:/Users/hunter/Desktop/HashtagMarketing/HMDevSite'

var server = express();
server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

server.listen(8080);

/*
http.createServer(function(req, res){
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });

    /*fs.readFile(dir + '/css/styles.css', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/css','Content-Length':data.length});
      res.write(data);
      res.end();
    });

}).listen(8080);*/